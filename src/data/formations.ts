export interface Formation {
    titreKey: string;
    periodeKey: string;
    descriptionKey: string;
    pointsPositifsKeys: string[];
    pointsNegatifsKeys: string[];
    lien: string;
    logo: string;
    ecoleKey: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const formations: Formation[] = [
    {
        titreKey: 'formations.form1.title',
        periodeKey: 'formations.form1.period',
        descriptionKey: 'formations.form1.desc',
        pointsPositifsKeys: [
            'formations.form1.positive1',
            'formations.form1.positive2',
            'formations.form1.positive3'
        ],
        pointsNegatifsKeys: [
            'formations.form1.negative1'
        ],
        lien: 'https://www.ynov.com/campus/bordeaux/',
        logo: `${baseUrl}images/logos/ynov.png`,
        ecoleKey: 'formations.form1.school'
    },
    {
        titreKey: 'formations.form2.title',
        periodeKey: 'formations.form2.period',
        descriptionKey: 'formations.form2.desc',
        pointsPositifsKeys: [
            'formations.form2.positive1',
            'formations.form2.positive2',
            'formations.form2.positive3'
        ],
        pointsNegatifsKeys: [
            'formations.form2.negative1',
            'formations.form2.negative2'
        ],
        lien: 'https://www.eiffel-bordeaux.org/formations/bts-sio-cybersecurite/',
        logo: `${baseUrl}images/logos/gustave-eiffel.jpg`,
        ecoleKey: 'formations.form2.school'
    },
    {
        titreKey: 'formations.form3.title',
        periodeKey: 'formations.form3.period',
        descriptionKey: 'formations.form3.desc',
        pointsPositifsKeys: [
            'formations.form3.positive1',
            'formations.form3.positive2',
            'formations.form3.positive3'
        ],
        pointsNegatifsKeys: [
            'formations.form3.negative1',
            'formations.form3.negative2'
        ],
        lien: 'https://lyceejeanrenou-lareole.net/la-seconde-generale-et-technologique-une-classe-dorientation/',
        logo: `${baseUrl}images/logos/jean-renou.jpg`,
        ecoleKey: 'formations.form3.school'
    }
];