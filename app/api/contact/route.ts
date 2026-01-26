import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    console.log('API route called') // Debug log
    
    const { firstName, lastName, email, subject, message } = await request.json()
    
    console.log('Form data received:', { firstName, lastName, email, subject }) // Debug log (don't log full message for privacy)

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      console.log('Validation failed: Missing fields')
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email')
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Email configuration missing:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_APP_PASSWORD: !!process.env.EMAIL_APP_PASSWORD
      })
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    console.log('Creating transporter...')
    const transporter = createTransporter()

    // Test the connection first
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service connection failed. Please check your email configuration.' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Contact Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                  <td style="padding: 8px 0; color: #333;">
                    <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Subject:</td>
                  <td style="padding: 8px 0; color: #333;">${subject}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 25px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form.
              </p>
              <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">
                Reply directly to this email to respond to ${firstName}.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${firstName}.
      `
    }

    console.log('Sending email...')
    // Send email
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    
    // Handle specific nodemailer errors
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      
      if (error.message.includes('Invalid login') || error.message.includes('Username and Password not accepted')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Please check your Gmail app password.' },
          { status: 500 }
        )
      }
      if (error.message.includes('Network') || error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'Network connection failed. Please check your internet connection.' },
          { status: 500 }
        )
      }
      if (error.message.includes('self signed certificate')) {
        return NextResponse.json(
          { error: 'SSL certificate error. This might be a network configuration issue.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Add OPTIONS method for CORS if needed
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
