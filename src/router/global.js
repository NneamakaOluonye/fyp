const routes = [
  {
    path: "/overview",
    name: "overview",
    component: () => import("../views/user/global/OverviewView.vue"),
    meta: {
      title: "Overview",
      description: "Overview",
      requiresAuth: true,
      roles: [
        "student",
        "instructor"
      ]
    }
  },
  {
    path: "/student-detail/:id",
    name: "Student_details",
    component: () => import("../views/user/global/StudentDetailsView.vue"),
    meta: {
      title: "Student Details",
      description: "Student Details",
      requiresAuth: true,
      roles: [
        "student",
        "instructor"
      ]
    }
  },
  {
    path: "/course/:id",
    name: "course_detail",
    component: () => import("../views/user/global/CourseView.vue"),
    meta: {
      title: "Course Details",
      description: "Course Detail",
      requiresAuth: true,
      roles: [
        "instructor",
        "student"
      ]
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/user/global/ProfileView.vue"),
    meta: {
      title: "Profile",
      description: "Profile",
      requiresAuth: true,
      roles: [
        "student",
        "instructor"
      ]
    }
  },
  {
    path: "/change-password",
    name: "change_password",
    component: () => import("../views/user/global/ChangePasswordView.vue"),
    meta: {
      title: "Profile",
      description: "Profile",
      requiresAuth: true,
      roles: [
        "student",
        "instructor"
      ]
    }
  },
  {
    path: "/onboarding",
    name: "onboarding",
    component: () => import("../views/user/global/OnboardingView.vue"),
    meta: {
      title: "Onboarding",
      description: "Let's get to know you",
      requiresAuth: true,
      roles: [
        "instructor",
        "student"
      ]
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/user/global/LogoutView.vue"),
    meta: {
      title: "Logout",
      description: "Logout",
      requiresAuth: true,
      roles: [
        "instructor",
        "student"
      ]
    }
  }
];

export default routes;