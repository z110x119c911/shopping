<template>
  <div>
    <h2 class="article py-5 text-center">Contact Us</h2>
    <div class="row no-gutters py-3 justify-content-center">
      <ValidationObserver class="col-md-8 col-10" v-slot="{ invalid }">
        <form @submit.prevent="sendmail">
          <ValidationProvider rules="required" v-slot="{ errors , classes }">
            <div class="form-group">
              <label>收件人姓名</label>
              <input type="text" class="form-control" :class="classes" name="姓名"
              v-model="contact.Name" placeholder="輸入姓名">
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors , classes }">
            <div class="form-group">
              <label>收件人電話</label>
              <input type="tel" name="聯絡電話" :class="classes" class="form-control" 
              v-model="contact.Phone" placeholder="請輸入電話">
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|email" v-slot="{ errors , classes }">
            <div class="form-group" >
              <!-- 輸入框 -->
              <label>E-mail</label>
              <input type="email" name="email" v-model="contact.mail"
                  class="form-control" :class="classes">
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors , classes }">
            <div class="form-group">
              <label>標題</label>
              <input type="text" class="form-control" :class="classes" name="標題"
              v-model="contact.Title">
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors , classes }">
            <div class="form-group">
              <label>留言</label>
              <textarea name="" v-model="contact.Content" id="內容" class="form-control"
               :class="classes" cols="30" rows="10"></textarea>
              <span class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
<!-- 
            <div class="col-md-8 col-10 mb-3">
              <label for="validationTextarea">留言</label>
              <textarea class="form-control" id="validationTextarea"
                v-model="contact.Content"
                required>
              </textarea>
              <div class="invalid-feedback">格式錯誤</div>
            </div> -->
          <div class="text-right">
            <button class="btn btn-content" :disabled="invalid">送出訂單</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact:{
        Name:'',
        Phone:'',
        mail:'',
        Title:'',
        Content:'',
      },
      Token:'b44d0219-cc9d-4bae-8d92-f9c592c01930'
    }
  },
  methods: {
    sendmail(){
      const vm = this;
      if(vm.contact.Name,vm.contact.Phone,vm.contact.mail,vm.contact.Title,vm.contact.Content != ''){
        Email.send({
        SecureToken: vm.Token,
        To: 'james840525@gmail.com',
        From: vm.contact.mail,
        Subject: vm.contact.Title,
        Body: `姓名：${vm.contact.Name}
                電話：${vm.contact.Phone}
                信箱：${vm.contact.mail}
                內容：${vm.contact.Content}	
            `
        }).then(
          alert('已送出，盡快為您回覆')
        );
      }else{
        return
      }
    }
  },
};
</script>