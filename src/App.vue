<script setup lang="ts">
import { Toolbar, SideNav, SideNavItem, SideNavLogo, Card, ToolbarItem, SearchInput, ToolbarMenu, UserExternalLinks} from '@/components'
import { VApp, VMain} from 'vuetify/components';

const appName = 'MY APP'
</script>

<template>
  <VApp>
    <VMain>
      <SideNav>
        <template #logo>
          <SideNavLogo
            :title="appName"
          />
        </template>
        <SideNavItem
          prepend-icon="$mdiViewDashboard"
          title="Dashboard"
          value="dashboard"
          to="/dashboard"
          active-color="secondary"
        />
        <SideNavItem
          prepend-icon="$mdiAccountBox"
          title="Account"
          value="account"
          to="/account"
          active-color="secondary"
        />
        <SideNavItem
          prepend-icon="$mdiGavel"
          title="Admin"
          value="admin"
          to="/admin"
          active-color="secondary"
        />
      </SideNav>
      <Toolbar
        :title="appName"
      >
        <ToolbarItem>
          <h1 class="app-title">
            {{ appName }}
          </h1>
        </ToolbarItem>
        <ToolbarItem>
          <SearchInput />
          <Card />
        </ToolbarItem>
        <ToolbarItem>
          <UserExternalLinks />
        </ToolbarItem>
        <ToolbarItem>
          <ToolbarMenu />
        </ToolbarItem>
      </Toolbar>
      <RouterView />
    </VMain>
  </VApp>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.app-title {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
}
  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 16px;
    padding: 10px;
    *:not(.last) {
      margin-bottom: 7px;
    }
    .button {
      width: 100%;
    }
  }
  .links {
    height: fit-content;
    display: flex;
    align-items: center;
    .button {
      width: 100%;
    }
  }
  
  .avatar {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
</style>