import React,{useEffect} from 'react';

export default function NotFoundPage() {
    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
        }, []);

  return (
    <main>
    <section style={{width:'100%',
                    height:'50vh',
                    backgroundColor:'white',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'5vh'}}>
    <h1>NOT FOUND</h1>
    <br/>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
    </main>
  );
}
