import React, { useRef, useState } from 'react'
import { H3, P, Button, Input, Form, Section, Row } from '@deck-app/ui'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../auth.module.scss'

const Login: React.FunctionComponent = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!emailRef.current || !passwordRef.current) {
      return
    }
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError('Failed to login')
    }

    setLoading(false)
  }
  return (
    <main className='app'>
      <Section className={styles['section']}>
        <Row>
          <div className={styles['login']}>
            <H3>Login</H3>
            {error && (
              <P
                className={[styles['alert'], styles['alert-danger']].join(' ')}
              >
                {error}
              </P>
            )}
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
              <Button
                size='large'
                className={styles['button']}
                onClick={handleSubmit}
                type='submit'
                disabled={loading}
              >
                Login
              </Button>
            </Form>
            <P>
              <Link to='/forgot-password'>Forgot password?</Link>
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

export default Login
