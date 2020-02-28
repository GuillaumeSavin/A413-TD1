function init()
{
    defTitre1()
    defTitre2()
    defTitre3()
    defTitre4()
    datemodif()
}

function defTitre1()
{
    document.title = document.getElementById("titre").innerText
}

function defTitre2()
{
    let liste_h2 = document.getElementsByTagName("h2")
    let taille_liste = liste_h2.length

    if(taille_liste == 0)
    {
        document.title = "Savin Guillaume"
    }
    else
    {
        document.title = document.getElementsByTagName("h2")[0].innerText
    }
}

function defTitre3()
{
    let liste_h2 = document.getElementsByTagName("h2")
    let taille_liste = liste_h2.length

    if(taille_liste == 0)
    {
        document.title = "Savin Guillaume"
    }
    else
    {
        document.title = document.getElementsByTagName("h2")[taille_liste - 1].innerText
    }
}

function defTitre4()
{
    let liste_firstOrLast = document.getElementsByClassName("firstOrLast")
    let taille_liste = liste_firstOrLast.length

    if (taille_liste != 0)
    {
        if (taille_liste % 2 == 0)
        {
            document.title = liste_firstOrLast[0].innerText
        }
        else
        {
            document.title = liste_firstOrLast[taille_liste - 1].innerText
        }
    }
}

function inverseTexte()
{
    let first_p = document.getElementById("inverse1").innerHTML
    let second_p = document.getElementById("inverse2").innerHTML

    document.getElementById("inverse1").innerHTML = second_p
    document.getElementById("inverse2").innerHTML = first_p
}

function datemodif()
{
    date = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    author = document.getElementsByTagName("meta")[1].content
    description = document.getElementsByTagName("meta")[2].content
    keywords = document.getElementsByTagName("meta")[3].content

    console.log(author)
    console.log(description)
    console.log(keywords)

    //date.getDate()
    date = date.toLocaleDateString("fr_FR",options)

    console.log(date)

    document.getElementById("date_modif").innerText = date
}