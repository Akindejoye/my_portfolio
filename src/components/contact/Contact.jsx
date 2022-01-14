import emailjs from "emailjs-com";
import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from './../../context';

const Contact = () => {

    const [done, setDone] = useState(false);
    const formRef = useRef();
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iy2ca3q', 'template_qtno5f8', formRef.current, 'user_ckBKuNBvhAt0cJY4Qf5Gq')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return ( 
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="Phone"
                                className='c-icon' 
                            />
                            +234 80 32 33 61 41
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt="Email"
                                className='c-icon' 
                            />
                            francis.akindejoye@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt="Address"
                                className='c-icon' 
                            />
                           1, Adeola Odekun road, Victorial Island Lagos Nigeria.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
                        <textarea name="message" rows="5" placeholder='Message' style={{backgroundColor: darkMode && '#333'}} />
                        <button type='submit'>Submit</button>
                        {done && "Thank You!"}
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;