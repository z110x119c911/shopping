<template>
  <div>
    <nav class="col-md-3 col-lg-2 d-md-block bg-light">
      <div class="pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link link hvr-shutter-out-horizontal" to="/admin/products">
              <i class="fas fa-box-open"></i>
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/checkList">
              <i class="far fa-list-alt"></i>
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon">
              <i class="fas fa-ticket-alt"></i>
              優惠券
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>