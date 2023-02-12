<template>
        <div>
          <div class="title">
              填写详细病情
          </div>
          <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请填写姓名,长度为2到10个字符"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input v-model="ruleForm.age" placeholder="请填写年龄"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="药物过敏史" prop="allergies">
                <el-input v-model="ruleForm.allergies" placeholder="请填写药物过敏史,没有则填无"></el-input>
              </el-form-item>
              <el-form-item label="病情描述" prop="description">
                <el-input type="textarea" v-model="ruleForm.description" class="description"></el-input>
              </el-form-item>
              <el-button type="primary" @click="nextStep('ruleForm')">下一步</el-button>
              <el-button @click="preStep()">返回</el-button>
            </el-form>
          </div>
        </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          age: '',
          sex: '',
          description: '',
          allergies: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          allergies: [
            { required: true, message: '请填写药物过敏史,没有则填无', trigger: 'blur' },
          ],
          description: [
            { required: true, message: '请描述病情', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      nextStep(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.state.active++;
            this.$store.dispatch('reflushInfo', this.ruleForm);

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      preStep(){
        if (this.$store.state.active-- < 0) this.$store.state.active = 0;
      }
    }
  }
</script>
<style>
.title{
    border-bottom: 1px solid #e5e5e5;
    height: 40px;
    line-height: 40px;
    color: #5a75f6;
    font-size: 1;
    font-family: "microsoft yahei";
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
}

.demo-ruleForm{
  margin-right: 30px;
}


</style>