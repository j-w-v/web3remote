import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react';

export default function Submit() {
    const [state, handleSubmit] = useForm("xeqnebzp");
  
    if (state.succeeded) {

      return (
        <Layout
            title={true}
            titleText="Submit Role"
        >
            <div className="my-8 px-6">
                <p>Thanks for submitting a job role. We will get back to you within 24 hours.</p>
            </div>
        </Layout>
      )
    }
    return (
        <Layout
        title={true}
            titleText="Submit Role">
        <div className="my-8 px-6">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
                Name:
            </label>
            <input
                id="name"
                type="text" 
                name="name"
            />
            <ValidationError 
                prefix="Name" 
                field="nsme"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email:
            </label>
            <input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
<label htmlFor="message">
                Message:
            </label>
<textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
           
        
        <div className=" text-xl text-white text-center p-4">
        <button 
            type="submit"
            disabled={state.submitting}
            className="bg-cta rounded p-2 w-9/12"
            >
            Submit
        </button>
        </div>
        </form>
    </div>
    </Layout>
  );

}