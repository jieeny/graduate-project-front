<template>
    <div id="PdfPage1">
        <button type="button" class="btn btn-primary" @click="pdfBtn">导出PDF</button>
        <div id="pdfDom" style="padding:10px;background-color:#fff;">
            <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
            <h1>Welcome to Your Vue.js App</h1>
            <p v-for="(item,index) in 5" :key="index">{{item}}Welcome to Your Vue.js App</p>
        </div>
    </div>
</template>

<script>
    // import htmlToPdf from '../../utils/htmlToPdf.js';
    import html2Canvas from 'html2canvas'
    import JsPDF from 'jspdf'
    export default {
        name: "PdfPage",
        data(){
            return{
                htmlTitle:'页面导出PDF文件名',
                sendPdf:{
                    orderId:'',
                    pdfBase64:''
                }
            }
        },
        methods:{
            getPdf(title) {
                html2Canvas(document.querySelector('#pdfDom'),{allowTaint: true}).then(canvas=>{
                    //内容的宽度
                    let contentWidth = canvas.width;
                    //内容高度
                    let contentHeight = canvas.height;
                    //一页pdf显示html页面生成的canvas高度,a4纸的尺寸[595.28,841.89];
                    let pageHeight = contentWidth / 592.28 * 841.89;
                    //未生成pdf的html页面高度
                    let leftHeight = contentHeight;
                    //页面偏移
                    let position = 0;
                    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    let imgWidth = 595.28;
                    let imgHeight = 592.28 / contentWidth * contentHeight;
                    //canvas转图片数据
                    let pageData = canvas.toDataURL('image/jpeg', 1.0);
                    //新建JsPDF对象
                    let PDF = new JsPDF('', 'pt', 'a4');
                    //判断是否分页
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    //保存文件
                    // PDF.save(title + '.pdf');
                    const pdfData = PDF.output('datauristring');//获取base64Pdf var pdfData = PDF.output('datauristring')//获取base64Pdf
                    const fileName='12345';
                    // const sendPdf=JSON.stringify({pdf: fileName});
                    // console.log(sendPdf);
                    this.sendPdf.pdfBase64=fileName;
                    this.sendPdf.orderId='12345';
                    this.postRequest('/auth/testPdf',this.sendPdf).then(resp => {
                        if (resp) {
                            console.log('在上传pdf函数中,下面的是resp')
                            console.log(resp);
                        }
                    });
                })
            },
            pdfBtn(){
                this.getPdf(this.htmlTitle);
                // console.log(this);
                
            }
            
        }
    }
</script>

<style scoped>
</style>