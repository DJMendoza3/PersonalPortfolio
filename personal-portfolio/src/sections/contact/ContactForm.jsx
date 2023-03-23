export default function ContactForm() {
    return(
        <form action="" className="col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="message">How can I help you?</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" name="" id="" />
        </form>
    );
}