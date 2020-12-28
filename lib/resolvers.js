'use strict'

const courses = [{
        _id: 'AnyID',
        title: 'Mi titulo',
        teacher: 'Mi profesor',
        description: 'Una descripcion',
        topic: 'Un tema'
    },
    {
        _id: 'AnyID2',
        title: 'Mi titulo2',
        teacher: 'Mi profesor2',
        description: 'Una descripcion2',
        topic: 'Un tema2'
    },
    {
        _id: 'AnyID3',
        title: 'Mi titulo3',
        teacher: 'Mi profesor3',
        description: 'Una descripcion3',
        topic: 'Un tema3'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
}