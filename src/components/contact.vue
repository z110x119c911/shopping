<template>
  <div>
    <h2 class="article py-5 text-center">Contact Us</h2>
    <div class="row no-gutters py-3 justify-content-center">
      <form class="needs-validation" novalidate>
        <div class="form-row mx-0 justify-content-center">
          <div class="col-md-8 col-10 mb-3">
            <label for="">姓名</label>
            <input
            v-model="contact.Name"
              type="text"
              class="form-control"
              required
            />
            <div class="invalid-feedback">格式錯誤</div>
          </div>
          <div class="col-md-8 col-10 mb-3">
            <label for="">電話</label>
            <input
            v-model="contact.Phone"
              type="text"
              class="form-control"
              required
            />
            <div class="invalid-feedback">格式錯誤</div>
          </div>
          <div class="col-md-8 col-10 mb-3">
            <label for="">信箱</label>
            <input
            v-model="contact.mail"
              type="email"
              class="form-control"
              required
            />
            <div class="invalid-feedback">格式錯誤</div>
          </div>
          <div class="col-md-8 col-10 mb-3">
            <label for="">標題</label>
            <input
            v-model="contact.Title"
              type="text"
              class="form-control"
              required
            />
            <div class="invalid-feedback">格式錯誤</div>
          </div>
          <div class="col-md-8 col-10 mb-3">
            <label for="validationTextarea">留言</label>
            <textarea class="form-control" id="validationTextarea"
            v-model="contact.Content"
            required></textarea>
            <div class="invalid-feedback">格式錯誤</div>
          </div>
        </div>
        <div class="row no-gutters justify-content-center">
          <div class="col-md-8 col-10 text-right">
            <button class="btn btn-primary" type="submit" @click="sendmail()">送出</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import '../smtp'
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