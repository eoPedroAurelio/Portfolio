import { Modal } from 'react-bootstrap'
import ContactLinks from './ContactLinks'

export default function ContactModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered contentClassName="custom-modal">
      <Modal.Header closeButton closeVariant="white" className="border-0">
        <Modal.Title>Vamos criar algo juntos?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Escolha por onde prefere falar comigo:</p>
        <ContactLinks />
      </Modal.Body>
    </Modal>
  )
}
