



export default function Contact() {
    return (
        <div id="contact" className="flex justify-center flex-col items-center bg-primary border-t-2 border-quaternary p-10 ">
        <form
            action="https://formsubmit.co/abadie.patrick27@gmail.com"
            method="POST"
            className="flex justify-center flex-col mt-3 text-white"
        >
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required className="bg-tertiary mb-7 p-1 rounded border-2 border-quaternary" />

            <label htmlFor="email">Votre Email :</label>
            <input type="email" id="email" name="email" required className="bg-tertiary mb-7 p-1 rounded border-2 border-quaternary" />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required className="bg-tertiary mb-7 p-1 rounded border-2 border-quaternary"></textarea>

            <button type="submit" className="bg-tertiary border-4 border-quaternary p-3 rounded cursor-pointer">Envoyer</button>
        </form>
        </div>
    )
}