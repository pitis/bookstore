import {
  IonAvatar,
  IonButton,
  IonChip,
  IonDatetime,
  IonDatetimeButton,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonToast,
} from '@ionic/react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface Person {
  firstName: string
  lastName: string
  email: string
}

export default function Profile() {
  const [person, setPerson] = useState<Person>()
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false)

  const { handleSubmit, control, formState, getValues, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    reValidateMode: 'onChange',
    mode: 'all',
  })
  console.log(watch())

  const { isValid } = formState

  function saveProfile() {
    console.log('here', isValid, getValues())
    if (!isValid) return

    const data = getValues()

    setPerson(data)
    setIsToastOpen(true)
  }

  function getInitials() {
    if (!person) return ''

    const firstInitial = person.firstName.charAt(0).toUpperCase()
    const lastInitial = person.lastName.charAt(0).toUpperCase()

    return firstInitial + lastInitial
  }

  console.log(getInitials())

  return (
    <form onSubmit={handleSubmit(saveProfile)}>
      <IonList>
        <IonChip>
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src='https://ionicframework.com/docs/img/demos/avatar.svg'
            />
          </IonAvatar>
          <IonLabel>{getInitials()}</IonLabel>
        </IonChip>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Controller
            control={control}
            name='firstName'
            rules={{ required: 'required', minLength: 2 }}
            render={({ field }) => (
              <input {...field} placeholder='Enter first name' />
            )}
          />

          <Controller
            control={control}
            name='lastName'
            rules={{ required: 'required', minLength: 2 }}
            render={({ field }) => (
              <input {...field} placeholder='Enter last name' />
            )}
          />

          <Controller
            control={control}
            name='email'
            rules={{
              required: 'required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <input {...field} type='email' placeholder='Enter your email' />
                {fieldState?.error && <span>{fieldState?.error?.message}</span>}
              </>
            )}
          />
        </div>
      </IonList>
      <IonButton slot='end' color='primary' type='submit'>
        Save profile
      </IonButton>
      <IonToast
        isOpen={isToastOpen}
        position='top'
        message='Profile saved successfully'
        onDidDismiss={() => setIsToastOpen(false)}
        duration={5000}
      />
    </form>
  )
}
