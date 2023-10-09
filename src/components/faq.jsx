import React from 'react';

function FAQ() {
    return (
        <div className="faq-section">
            <div className="faq-container">
                <h2 className="faq-heading">Jēča Jautājumi</h2>

                <div className="faq-question">
                    <h3>Question 1: Kas ir prasības?</h3>
                    <p className="faq-answer">
                        Prasības ir precīzi un detalizēti apraksti vai specifikācijas tam, ko programmatūra vai sistēma ir paredzēta darīt. Prasības ir kā saraksts vai apraksts nozīmīgiem un nepieciešamiem funkcionālajiem un nefunkcionālajiem elementiem, kas jāiekļauj izstrādājamajā sistēmā. Prasības var ietvert funkcionalitātes aprakstus, veiktspējas prasības, drošības standartus un citus kritērijus.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Question 2: Kas ir prasību specifikācija?</h3>
                    <p className="faq-answer">
                        Prasību specifikācija ir dokumentācija vai tehniskais dokuments, kas detalizēti apraksta visus prasības elementus. Tā ir plašāka un padziļinātāka nekā vienkāršs prasību saraksts. Prasību specifikācija ietver informāciju par katra prasības elementa funkcionalitāti, parametriem, interfeisu un attiecībām ar citiem elementiem sistēmā. Tās mērķis ir nodrošināt skaidru un saprotamu pamatu programmatūras izstrādei un testēšanai.
                    </p>
                </div>

                <div className="faq-question">
                    <h3>Question 3: Ar ko viena atšķirās no otras?</h3>
                    <p className="faq-answer">
                        Prasības un prasību specifikācija ir cieši saistītas, bet atšķiras pēc detalizācijas līmeņa un mērķa. Prasības ir vispārīgs apraksts tam, ko vēlaties panākt, bet tās var būt ļoti īsi un vispārīgi. Prasību specifikācija ir sīkāka un detalizētāka, tā piedāvā visaptverošu aprakstu katra prasības aspekta, izmantojot precīzus tehniskus terminus un detalizētas shēmas.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
