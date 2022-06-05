import React, { useRef, useState } from 'react'
import { H3, P, Button, Input, Form, Section, Row } from '@deck-app/ui'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import styles from '../auth.module.scss'

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!emailRef.current) return
    try {
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch (error) {
      console.error(error)
      setError('Failed to reset password')
    }

    setLoading(false)
  }
  return (
    <main className='app'>
      <Section className={styles['section']}>
        <Row className={styles['center']}>
          <div className={styles['forgot-password']}>
            <H3>Reset Password</H3>
            {error && (
              <P
                className={[styles['alert'], styles['alert-danger']].join(' ')}
              >
                {error}
              </P>
            )}
            {message && (
              <P
                className={[styles['alert'], styles['alert-success']].join(' ')}
              >
                {message}
              </P>
            )}
            <Form onSubmit={handleSubmit}>
              <div>
                <label className={styles['label']}>
                  Email
                  <Input type='email' innerRef={emailRef} required />
                </label>
              </div>
              <Button
                size='large'
                className={styles['button']}
                onClick={handleSubmit}
                type='submit'
                disabled={loading}
              >
                Reset
              </Button>
            </Form>
            <P>
              <Link to='/login'>Login</Link>
            </P>
          </div>
          <P className={styles['no-account']}>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </P>
        </Row>
      </Section>
    </main>
  )
}

export default ForgotPassword
