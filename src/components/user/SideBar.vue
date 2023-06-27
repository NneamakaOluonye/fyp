<template>
  <!--  TODO Replace with proper Icons  -->
  <d-box id="sidebar" :class="{
    'show_mobile': isSidebarActive
  }">
    <close-circle-icon class="close_icon" v-if="isSidebarActive" @click="isSidebarActive = false" />
    <d-box class="logo-box">
      <auth-logo-light classes="logo-box" />
    </d-box>
    <d-box class="sidebar-links sidebar__main__links">
      <d-box v-for="sidebarLink in sidebarLinks">
        <d-box v-if="Object.keys(sidebarLink).length > 2">
          <side-bar-link
              v-if="Object.keys(sidebarLink).length > 1 && role.hasRoles(sidebarLink.role)"
              :route="sidebarLink.route"
              :route-text="sidebarLink.routeText"
              :icon="sidebarLink.icon"
              :active-icon="sidebarLink.activeIcon"
              :is-active="sidebarLink.isActive"
          />
        </d-box>
        <d-box v-if="sidebarLink.role">
          <side-bar-link-title
              v-if="Object.keys(sidebarLink).length <= 1 || role.hasRoles(sidebarLink.role)"
              :title="sidebarLink.title"
              :badge="sidebarLink.badge"
          />
        </d-box>
        <d-box v-else>
          <side-bar-link-title
              v-if="Object.keys(sidebarLink).length <= 1"
              :title="sidebarLink.title"
              :badge="sidebarLink.badge"
          />
        </d-box>
      </d-box>
    </d-box>
    <d-box class="footer-section">
      <d-box class="profile" @click="profileIsActive = !profileIsActive" :class="{
      'active' : profileIsActive
    }">
        <d-box class="profile-icon" :class="{
        'active' : profileIsActive
      }">
          AO
        </d-box>
        <d-box class="profile-details">
          <d-text
              class="name_area"
              is="p">
            <d-box display="flex" flex-direction="row" gap="4px">
              <d-box is="span" v-model="payload.first_name">{{userData.first_name}}</d-box>
              <d-box is="span" v-model="payload.last_name">{{userData.last_name}}</d-box>
            </d-box>
            <ChevronArrowDownIcon v-if="profileIsActive" class="collapse-arrow" />
            <ChevronArrowUpIcon v-else class="collapse-arrow" />
          </d-text>
          <d-box v-if="role.hasRole('student')">
            <d-text is="p">
              <d-box is="span">student</d-box>
            </d-text>
          </d-box>
          <d-box v-if="role.hasRole('instructor')">
            <d-text is="p">
              <d-box is="span">instructor</d-box>
            </d-text>
          </d-box>
        </d-box>
      </d-box>

      <d-box class="profile-footer" :class="{
      'active' : profileIsActive
    }">
        <div>
          <d-box class="profile" @click="profileIsActive = !profileIsActive" :class="{
      'active' : profileIsActive
    }">
            <d-box class="profile-icon" :class="{
        'active' : profileIsActive
      }">
              AO
            </d-box>
            <d-box class="profile-details">
              <d-text
                  display="flex"
                  justify-content="center"
                  is="p">
                <d-box display="flex" flex-direction="row" gap="4px">
                  <d-box is="span" v-model="payload.first_name">{{userData.first_name}}</d-box>
                  <d-box is="span" v-model="payload.last_name">{{userData.last_name}}</d-box>
                </d-box>
                <ChevronArrowDownIcon v-if="profileIsActive" class="collapse-arrow" />
                <ChevronArrowUpIcon v-else class="collapse-arrow" />
              </d-text>
              <d-text is="p">
                <d-box is="span">student</d-box>
                <!--                <span class="badge">Admin</span>-->
              </d-text>
            </d-box>
          </d-box>
        </div>
        <d-box class="sidebar-links sidebar-bottom-links">
          <d-box v-for="sidebarBottomLink in sidebarBottomLinks">
            <side-bar-link
                v-if="role.hasRoles(sidebarBottomLink.role)"
                :route="sidebarBottomLink.route"
                :route-text="sidebarBottomLink.routeText"
                :icon="sidebarBottomLink.icon"
                :active-icon="sidebarBottomLink.activeIcon"
            />
          </d-box>
        </d-box>
        <d-box class="footer-links">
          <side-bar-footer-link
              v-for="sidebarFooterLink in sidebarFooterLinks"
              :route="sidebarFooterLink.route"
              :route-text="sidebarFooterLink.routeText"
              :icon="sidebarFooterLink.icon"
          />
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  CategoryOutlineIcon,
  CategoryFilledIcon,
  UserFilledIcon,
  Setting2OutlineIcon,
  Setting2FilledIcon,
  LogoutOutlineIcon,
  ChevronArrowDownIcon,
  ChevronArrowUpIcon,
  CloseCircleIcon,
  BookIcon,
  SearchIcon,
  BookFilledIcon
} from "@deposits/ui-kit-vue";
import AuthLogoLight from "~/components/guest/AuthLogoLight.vue";
import SideBarLink from "~/components/user/SideBarLink.vue";
import SideBarFooterLink from "~/components/user/SideBarFooterLink.vue";
import { ref, reactive } from "vue";
import { useRoleStore } from "~/stores/role";
import { useRouter } from "vue-router";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
const {
  getDataFromLocalStorage,
  addDataToLocalStorage
} = useLocalStorage();

const userData = getDataFromLocalStorage("user")
const payload = reactive({
  user_id: userData.id,
  first_name: userData.first_name,
  last_name: userData.last_name,
});

const props = defineProps({
  isSidebarActive: {
    type: Boolean,
    default: false
  }
});

const sidebarLinks = ref([
  {
    route: { name: "overview" },
    routeText: "Dashboard",
    icon: CategoryOutlineIcon,
    activeIcon: CategoryFilledIcon,
    role: [
      "student",
      "instructor",
    ]
  },
  {
    route: { name: "course_list" },
    routeText: "Courses",
    icon: BookIcon,
    activeIcon: BookFilledIcon,
    role: [
      "instructor",
    ]
  },
  {
    route: { name: "student_list" },
    routeText: "Student List",
    icon: UserFilledIcon,
    activeIcon: UserFilledIcon,
    role: [
      "instructor",
    ]
  },
  {
    route: { name: "quiz_view" },
    routeText: "Quiz",
    icon: SearchIcon,
    activeIcon: BookFilledIcon,
    role: [
      "instructor",
    ]
  },
  {
    route: { name: "courses" },
    routeText: "Available Courses",
    icon: BookIcon,
    activeIcon: BookFilledIcon,
    role: [
      "student"
    ]
  },
  {
    route: { name: "enrolled-courses" },
    routeText: "Enrolled Courses",
    icon: BookIcon,
    activeIcon: BookFilledIcon,
    role: [
      "student"
    ]
  },
  {
    route: { name: "take_a_quiz" },
    routeText: "Take a Quiz",
    icon: SearchIcon,
    activeIcon: BookFilledIcon,
    role: [
      "student",
    ]
  },
]);

const sidebarBottomLinks = ref([
  {
    route: { name: "profile" },
    routeText: "Profile",
    icon: UserFilledIcon,
    activeIcon: UserFilledIcon,
    role: [
      "student",
      "instructor",
    ]
  },
  {
    route: { name: "courses" },
    routeText: "Settings",
    icon: Setting2OutlineIcon,
    activeIcon: Setting2FilledIcon,
    role: [
      "student",
      "instructor",
    ]
  }
]);
const sidebarFooterLinks = ref([
  {
    route: { name: "logout" },
    routeText: "Log out",
    icon: LogoutOutlineIcon,
    textColor: "#ACD7FFB2",
    iconColor: "#D62F4B"
  }
]);

const profileIsActive = ref(false);
const role = useRoleStore();
</script>

<style lang="scss" scoped>
#sidebar {
  z-index: 100000;

  &.show_mobile {
    width: 100%;
    display: block;
  }

  .close_icon {
    color: #ffffff;
    position: absolute;
    top: 10px;
    right: 10px;
    height: 35px;
    width: 35px;
  }

  p, h1, h2, h3, h4, h5, h6, strong {
    font-family: var(--secondary-font);
    font-weight: 500;
  }

  display: flex;
  width: var(--sidebar-width);
  height: 100vh;
  position: fixed;
  overflow: auto;
  background: var(--light-primary-500);
  flex-direction: column;

  .logo-box {
    background-color: var(--light-primary-700);
    display: flex;
    justify-content: left;
    align-items: center;
    height: 95px;
    padding-left: 1rem;
    margin: 0 !important;
  }

  .sidebar-bottom-links {
    border-bottom: 1px solid var(--light-primary-500);
    padding-bottom: 5px;
  }
}

.sidebar__main__links {
  padding: 1rem;
  overflow-y: auto;
  margin-bottom: 120px;
}

.profile {
  display: flex;
  align-items: center;
  padding: 25px;
  /* margin-top: 10px; */
  margin-bottom: 10px;
  border-top: 1px solid var(--light-primary-500);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-top-right-radius: 50px;

  &.active {
    border-bottom: 1px solid var(--light-primary-500);
    margin-top: 0;
    margin-bottom: 0;
  }

  .profile-icon {
    color: #ffffff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);

    &.active {
      background: var(--light-primary-500);
    }
  }

  .profile-details {
    margin-left: 10px;
    color: #ffffff;

    .name_area {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p:first-child {
      font-size: 13px;

      font-weight: bold;
    }

    p:last-child {
      font-size: 14px;
      margin-top: 5px;
      color: #ACD7FF;
    }

    .collapse-arrow {
      margin-left: 20px;
      font-size: 10px;
      display: inline-block;
    }
  }
}

.badge {
  margin-left: 15px;
  padding: 5px 10px;
  font-size: 11px;
  background: #00B058;
  color: #ffffff;
  border-radius: 15px;
}

@media only screen and (max-width: 600px) {
  #sidebar {
    display: none;
  }
}

.profile-footer {
  position: fixed;
  background: var(--light-primary-600);
  bottom: -900px;
  transition: .3s ease-in-out;
  width: var(--sidebar-width);
  padding: 0 10px;

  &.active {
    bottom: 0;
    left: 0;
    border-top-right-radius: 71px;
  }
}

.footer-section {
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--light-primary-600);
  border-top-right-radius: 50px;
  width: var(--sidebar-width);
}
</style>