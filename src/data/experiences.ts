export interface XP {
    titreKey: string;
    entreprise: string;
    logo: string;
    periodeKey: string;
    descriptionKey: string;
    missionsKeys: string[];
    avisKey: string;
    lienProjet?: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const experiences: XP[] = [
    {
        titreKey: 'experiences.xp1.title',
        entreprise: 'Home Made IO',
        logo: `${baseUrl}home-made-io.jpg`,
        periodeKey: 'experiences.xp1.period',
        descriptionKey: 'experiences.xp1.desc',
        missionsKeys: [
            'experiences.xp1.mission1',
            'experiences.xp1.mission2',
            'experiences.xp1.mission3',
            'experiences.xp1.mission4',
            'experiences.xp1.mission5'
        ],
        avisKey: 'experiences.xp1.opinion'
    },
    {
        titreKey: 'experiences.xp2.title',
        entreprise: 'Groupe FBO',
        logo: `${baseUrl}groupeFBO.png`,
        periodeKey: 'experiences.xp2.period',
        descriptionKey: 'experiences.xp2.desc',
        missionsKeys: [
            'experiences.xp2.mission1',
            'experiences.xp2.mission2',
            'experiences.xp2.mission3',
            'experiences.xp2.mission4',
            'experiences.xp2.mission5'
        ],
        avisKey: 'experiences.xp2.opinion',
        lienProjet: '/projects/berroyer'
    },
    {
        titreKey: 'experiences.xp3.title',
        entreprise: 'DevOpti',
        logo: `${baseUrl}devopti.png`,
        periodeKey: 'experiences.xp3.period',
        descriptionKey: 'experiences.xp3.desc',
        missionsKeys: [
            'experiences.xp3.mission1',
            'experiences.xp3.mission2'
        ],
        avisKey: 'experiences.xp3.opinion',
        lienProjet: '/projects/sneaky'
    },
    {
        titreKey: 'experiences.xp4.title',
        entreprise: 'Divers',
        logo: `${baseUrl}proman.png`,
        periodeKey: 'experiences.xp4.period',
        descriptionKey: 'experiences.xp4.desc',
        missionsKeys: [
            'experiences.xp4.mission1',
            'experiences.xp4.mission2'
        ],
        avisKey: 'experiences.xp4.opinion'
    },
    {
        titreKey: 'experiences.xp5.title',
        entreprise: 'Vignoble Ducourt',
        logo: `${baseUrl}ducourt.png`,
        periodeKey: 'experiences.xp5.period',
        descriptionKey: 'experiences.xp5.desc',
        missionsKeys: [
            'experiences.xp5.mission1',
            'experiences.xp5.mission2',
            'experiences.xp5.mission3',
            'experiences.xp5.mission4'
        ],
        avisKey: 'experiences.xp5.opinion'
    }
];