import React, { useRef, useState } from 'react'
import { H3, P, Button, Input, Form, Section, Row } from '@deck-app/ui'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import styles from '../auth.module.scss'

const SignUp: React.FunctionComponent = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signUp } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const Error = () => {
    if (!error) return null
    const className = [styles['alert'], styles['alert-danger']].join(' ')
    return <P className={className}>{error}</P>
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !passwordConfirmRef.current
    ) {
      return setError('Please fill out all fields')
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError('Passwords do not match')
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError('Failed to create an account')
    }

    setLoading(false)
  }
  return (
    <main className='app'>
      <Section className={styles['section']}>
        <Row className={styles['center']}>
          <div className={styles['sign-up']}>
            <H3>Sign Up</H3>
            <Error />
            <Form onSubmit={handleSubmit}>
              <div>
                <label className={styles['label']}>
                  Email
                  <Input type='email' innerRef={emailRef} required />
                </label>
              </div>
              <div>
                <label className={styles['label']}>
                  Password
                  <Input type='password' innerRef={passwordRef} required />
                </label>
              </div>
              <div>
                <label className={styles['label']}>
                  Password Confirmation
                  <Input
                    type='password'
                    innerRef={passwordConfirmRef}
                    required
                  />
                </label>
              </div>
              <Button
                size='large'
                className={styles['button']}
                onClick={handleSubmit}
                type='submit'
                disabled={loading}
              >
                Sign Up
              </Button>
            </Form>
          </div>
          <P className={styles['no-account']}>
            Already have an account? <Link to='/login'>Log in</Link>
          </P>
        </Row>
      </Section>
    </main>
  )
}

export default SignUp
