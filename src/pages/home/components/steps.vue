<template>
  <div class="">
    <div class="step uk-card-small uk-card-primary uk-card-body" uk-sticky="bottom: #offset">
      <ul class="step-items uk-breadcrumb">
        <li>
          <div class="uk-inline">
            <span uk-icon="icon:info"></span>
            <a href="#">انتخاب خدمت</a>
          </div>
        </li>
        <li>
          <div class="uk-inline">
            <span uk-icon="icon:info"></span>
            <a href="#">ثبت جزئیات</a>
          </div>
        </li>
        <li class="uk-disabled">
          <div class="uk-inline">
            <span uk-icon="icon:info"></span>
            <a href="#">بررسی نهایی</a>
          </div>
        </li>
        <li>
          <div class="uk-inline">
            <span uk-icon="icon:info"></span>
            <a href="#">ثبت سفارش</a>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>


<script>
  export default {


  }
</script>


<style>

  .step{
    width: 50%;
  }

  .uk-breadcrumb > li::before {
    content: unset !important;
  }

  .uk-breadcrumb > li {
    margin-right: 10px;
    background-color: cornflowerblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  }


</style>
