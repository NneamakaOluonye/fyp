const routes = [
    {
        path: "/student-courses",
        name: "courses",
        component: () => import("../views/user/student/courses/StudentCoursesView.vue"),
        meta: {
            title: "Courses",
            description: "Your available courses",
            requiresAuth: true,
            roles: [
                "student"
            ]
        }
    },
    {
        path: "/take-a-quiz",
        name: "take_a_quiz",
        component: () => import("../views/user/student/quiz/StudentQuizListView.vue"),
        meta: {
            title: "Quiz Detail",
            description: "Quiz Details",
            requiresAuth: true,
            roles: [
                "student"
            ]
        }
    },
    {
        path: "/take-quiz/:id",
        name: "take_quiz",
        component: () => import("../views/user/student/quiz/TakeQuizView.vue"),
        meta: {
            title: "Take a Quiz",
            description: "Take a Quiz",
            requiresAuth: true,
            roles: [
                "student"
            ]
        }
    }
];

export default routes;