const SET_NEWS_LIST = 'SET_NEWS_LIST'



const initialState = {
    newsList: [
        {title: 'Начался первый в истории виртуальный саммит G20' , text: 'ДОХА, 26 мар - РИА Новости. Начался первый в истории виртуальный саммит "Большой двадцатки", посвященный мерам по борьбе с коронавирусом.\n' +
        'В G20 в этом году председательствует Саудовская Аравия, первым взял слово король Сальман бен Абдель Азиз Аль Сауд, сообщил телеканал "Аль-Арабия".', data: '26.03.2020'},
        {title: '"Вы вызвали гуманитарную катастрофу": Китай в наступлении' , text: 'В главной газете Китая "Жэньминь жибао" опубликована статья "США — создатель гуманитарных катастроф". В статье цитируется недавний доклад информационного офиса Госсовета КНР (то есть правительства) о нарушении прав человека в Соединенных Штатах. Главный посыл статьи: Америка своими санкциями и прочими акциями создала несколько таких катастроф в мире.', data: '26.03.2020'},
        {title: 'Нет шоу — нет бизнеса. Как музыканты всего мира переживают пандемию' , text: 'МОСКВА, 26 мар — РИА Новости, Павел Сурков. Мировой шоу-бизнес в кризисе, и неизвестно, сможет ли он восстановиться. Один за другим отменяют фестивали, закрывают театры и концертные залы, переносят концерты. Как в этой стремительно изменившейся реальности существуют музыканты — в материале РИА Новости.', data: '26.03.2020'}
    ]
}



export const newsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {...state, newsList: action.payload}
        default:
            return state
    }
}

export const setNewsList = payload => ({type: SET_NEWS_LIST, payload})


