import React from 'react'

function ContactBtn() {
  return (
    <a href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0" target='_blank'><button className='p-2 bg-green-600 fixed right-8 bottom-8 rounded-md z-20 cursor-pointer'>WhatsApp</button></a>
  )
}

export default ContactBtn