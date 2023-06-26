const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/guest/LoginView.vue"),
    meta: {
      title: "Login to your account",
      description: "Login to your account",
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "student_register",
    component: () => import("../views/guest/StudentRegisterView.vue"),
    meta: {
      title: "Create account",
      description: "Create account",
      requiresAuth: false
    }
  },
  {
    path: "/instructor-register",
    name: "instructor_register",
    component: () => import("../views/guest/InstructorRegisterView.vue"),
    meta: {
      title: "Create account",
      description: "Create account",
      requiresAuth: false
    }
  },
  {
    path: "/verify-email",
    name: "verify-email",
    component: () => import("./../views/guest/VerifyEmailView.vue"),
    meta: {
      title: "Verify Email",
      description: "Verify Email",
      requiresAuth: false
    }
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("./../views/guest/ForgotPasswordView.vue"),
    meta: {
      title: "Forgot Password",
      description: "Forgot Password",
      requiresAuth: false
    }
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("./../views/guest/ResetPasswordView.vue"),
    meta: {
      title: "Reset Password",
      description: "Reset Password",
      requiresAuth: false
    }
  }
];

export default routes;