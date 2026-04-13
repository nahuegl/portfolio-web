'use client'

import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = cn(
    'w-full bg-transparent border-b border-dark-border/60 py-3 px-0 font-mono text-sm text-light',
    'placeholder:text-light/25 focus:outline-none focus:border-cyan transition-colors duration-200'
  )

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={t('title')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Copy */}
          <div>
            <p className="font-display text-3xl md:text-4xl font-bold text-light mb-6 leading-tight">
              {t('subtitle')}
            </p>
            <p className="font-body text-sm text-light/50 leading-relaxed mb-8">
              {t('or')}:
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:glnahuel17@gmail.com"
                className="flex items-center gap-3 text-light/60 hover:text-cyan transition-colors duration-200 group"
              >
                <Mail size={16} className="text-cyan/50 group-hover:text-cyan" />
                <span className="font-mono text-sm">glnahuel17@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nahuelgl17/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-light/60 hover:text-cyan transition-colors duration-200 group"
              >
                <Linkedin size={16} className="text-cyan/50 group-hover:text-cyan" />
                <span className="font-mono text-sm">linkedin.com/in/nahuelgl17</span>
              </a>
              <a
                href="https://github.com/nahuegl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-light/60 hover:text-cyan transition-colors duration-200 group"
              >
                <Github size={16} className="text-cyan/50 group-hover:text-cyan" />
                <span className="font-mono text-sm">github.com/nahuegl</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
            noValidate
          >
            {/* Name */}
            <div>
              <label className="font-mono text-xs text-light/30 tracking-widest uppercase block mb-2">
                {t('name')}
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="John Doe"
                className={inputClass}
                disabled={status === 'sending'}
              />
              {errors.name && (
                <p className="font-mono text-xs text-magenta mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-xs text-light/30 tracking-widest uppercase block mb-2">
                {t('email')}
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="hello@example.com"
                className={inputClass}
                disabled={status === 'sending'}
              />
              {errors.email && (
                <p className="font-mono text-xs text-magenta mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-xs text-light/30 tracking-widest uppercase block mb-2">
                {t('message')}
              </label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tell me about your project..."
                className={cn(inputClass, 'resize-none')}
                disabled={status === 'sending'}
              />
              {errors.message && (
                <p className="font-mono text-xs text-magenta mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <p className="font-mono text-xs text-cyan border border-cyan/20 bg-cyan/5 px-4 py-3">
                {t('success')}
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-magenta border border-magenta/20 bg-magenta/5 px-4 py-3">
                {t('error')}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-dark font-mono text-sm font-bold tracking-wider uppercase hover:bg-cyan-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed self-start"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  {t('sending')}
                </>
              ) : (
                <>
                  <Send size={14} />
                  {t('send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
