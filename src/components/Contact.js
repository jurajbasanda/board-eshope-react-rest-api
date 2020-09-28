import React,{useEffect} from 'react';
import '../Style/contact.scss';

const googleMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4733995464!2d-0.24168109087866665!3d51.528558241786754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZMO9bg!5e0!3m2!1ssk!2suk!4v1589224969964!5m2!1ssk!2suk"

const Contact=()=> {
    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
        }, []);

  return (
    <main>
    <section className='contact'>
    <iframe src={googleMap} title='googleMap' />
    
    <p className='contact-text'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum,
     illum tempora a saepe sunt dolorum beatae enim quam deleniti mollitia ea molestiae impedit temporibus
      fuga dolor rerum officiis accusantium.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum,
     illum tempora a saepe sunt dolorum beatae enim quam deleniti mollitia ea molestiae impedit temporibus
      fuga dolor rerum officiis accusantium.
      </p>
    <h2>Contact Us</h2>
    <form action="" method="">
      <label htmlFor="email">Email</label>
        <input type="email" id='email' name="email"/>
      <label htmlFor="name">Name</label>
        <input typ='name' id='name' name='name'/>
      <label htmlFor="message">Message</label>
        <textarea name="message" id='message' cols="30" rows="10"></textarea>
    <button type="">Send</button>
    </form>
      </section>
    </main>
  );
}
export default Contact