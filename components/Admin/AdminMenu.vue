<template>
  <nav class="sidebar-menu menu">
    <!--<p class="menu-label">
      {{ $t('auth.settings.general', 'General') }}
    </p>-->
    <nuxt-link to="/admin" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="dashboard"></hc-icon>
      </span>
      {{ $t('component.dashbord.label', 'Dashboard') }}
    </nuxt-link>
    <nuxt-link to="/admin/settings" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="cog"></hc-icon>
      </span>
      {{ $t('component.admin.settings', 'Settings') }}
    </nuxt-link>
    <nuxt-link to="/admin/categories" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="map-signs"></hc-icon>
      </span>
      {{ $t('component.category.labelOnePluralNone', null, 2) }}
    </nuxt-link>
    <nuxt-link to="/admin/organizations" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="building"></hc-icon>
      </span>
      {{ $t('component.admin.organizations', 'Organizations') }}
    </nuxt-link>
    <nuxt-link to="/admin/users" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="user-circle"></hc-icon>
      </span>
      {{ $t('component.admin.users', 'Users') }}
    </nuxt-link>
    <nuxt-link to="/admin/pages" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="file-text"></hc-icon>
      </span>
      {{ $t('component.admin.pages', 'Pages') }}
    </nuxt-link>
    <nuxt-link to="/admin/notifications" class="menu-item">
      <span class="menu-icon">
        <hc-icon icon="bullhorn"></hc-icon>
      </span>
      {{ $t('component.admin.systemNotifications', 'System Notifications') }}
    </nuxt-link>
  </nav>
</template>


<script>
  export default {
    name: 'hc-admin-menu'
  }
</script>

<style lang="scss" scoped>
  @import "assets/styles/utilities";

  $icon-padding: ($sidebar-closed-width - $sidebar-icon-width)/4 - 3px;

  .sidebar-menu {
    // background-color: $white;
  }

  .menu-item {
    display: flex;
    position: relative;
    padding: 0 $icon-padding;
    margin-bottom: 2px;
    color: $grey-darker;
    align-items: center;
    width: 100%;
    transition: all 0.1s ease-out;
    letter-spacing: 0.05em;
    // word-break: break-all;
    line-height: 1.1em;

    &:hover {
      background-color: $white-ter;
    }

    &.nuxt-link-exact-active {
      background-color: $white;
    }
  }

  .menu-icon {
    display: inline-flex;
    margin-right: $icon-padding + 2px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    color: $grey-dark;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    transition: all 0.1s ease-out;

    // .nuxt-link-exact-active & {
    //   color: $white;
    //   background-color: $primary;
    // }
  }
</style>
