import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { BiQuestionMark } from 'react-icons/bi'

const FAQ = () => {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="px-4 md:px-12 lg:px-64 py-32 flexs flex-col gap-8">
      <div className="flex flex-row pb-4">
        <span className="text-teal-400">
          <BiQuestionMark size={36} />
        </span>
        <h2 className="font-bold text-3xl md:text-4xl">
          FAQ<span className="text-teal-400">.</span>
        </h2>{' '}
      </div>

      <div>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className={`text-neutral-300 hover:text-neutral-500`}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody className={'text-neutral-300'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
            constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className={`text-neutral-300 hover:text-neutral-500`}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody className={'text-neutral-300'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
            constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)} className={`text-neutral-300 hover:text-neutral-500`}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className={'text-neutral-300'}>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re
            constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
