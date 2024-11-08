const Form = ({handleHeroOnSubmit, personaje, handleHeroOnChange}) => {
    return (
        <form onSubmit={handleHeroOnSubmit} className="formHero">
            <label htmlFor="name">Nombre propio: </label>
            <input onChange={handleHeroOnChange} value={personaje.name} type="text" name="name" id="name" />
            <label htmlFor="heroe">Nombre del Heroe: </label>
            <input onChange={handleHeroOnChange} value={personaje.hero} type="text" name="hero" id="hero" />
            <button type="submit">Agregar Personaje</button>
        </form>
    );
}

export default Form;