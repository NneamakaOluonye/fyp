const routes = [
    {
        path: "/student-list",
        name: "student_list",
        component: () => import("../views/user/instructor/StudentListView.vue"),
        meta: {
            title: "Student List",
            description: "List of students",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    },
    {
        path: "/course-list",
        name: "course_list",
        component: () => import("../views/user/instructor/courses/CoursesListView.vue"),
        meta: {
            title: "Course List",
            description: "List of courses",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    },
    {
        path: "/create-quiz",
        name: "create_quiz",
        component: () => import("../views/user/instructor/quiz/CreateQuizView.vue"),
        meta: {
            title: "Create Quiz",
            description: "Create Quiz",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    },
    {
        path: "/quiz",
        name: "quiz_view",
        component: () => import("../views/user/instructor/quiz/QuizView.vue"),
        meta: {
            title: "Quiz",
            description: "Quiz View",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    },
    {
        path: "/quiz-results",
        name: "result_view",
        component: () => import("../views/user/instructor/quiz/QuizDetailView.vue"),
        meta: {
            title: "Result",
            description: "Result Sheets",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    },
    {
        path: "/upload-courses",
        name: "upload_courses",
        component: () => import("../views/user/instructor/courses/UploadCoursesView.vue"),
        meta: {
            title: "Upload Courses",
            description: "Upload courses",
            requiresAuth: true,
            roles: [
                "instructor"
            ]
        }
    }
];

export default routes;