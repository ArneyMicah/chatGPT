import axios from 'axios'
import { Toast } from 'vant';
export default {
    data() {
        return {
            api_key: null, // openApi key
            search: '', // 搜索内容
            recordContent: [{
                time: new Date().getTime(),
                contactText: '你好，我是chatGPT，我可以和你聊天，你可以问我任何问题，我会给你一个答案',
                mineMsg: false
            }], // 聊天记录数组
            msgContent: '', // 聊天记录
            literal: '', // 生成的文字
        };
    },
    methods: {
        chatSearch() {
            if (!this.search) return this.$message.error('请输入搜索内容')
            let data = {
                time: new Date().getTime(),
                contactText: this.search,
                mineMsg: true
            }
            this.recordContent.push(data)
            this.msgContent += ('YOU:' + this.search + "\n")
            this.search = ''
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration: 0,
            });
            axios.post('https://api.openai.com/v1/completions', {
                prompt: this.msgContent,
                max_tokens: 2048,
                model: "text-davinci-003"
            }, {
                headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.api_key }
            }).then(response => {
                if (response.status === 200) {
                    let chatText = response.data.choices[0].text
                    // chatText中如果有BOT:字段就将该字段去掉
                    if (chatText.indexOf('BOT:') != -1) {
                        chatText = chatText.replace("BOT:", "")
                    }
                    let chatRobot = {
                        time: new Date().getTime(),
                        contactText: chatText,
                        mineMsg: false
                    }
                    this.recordContent.push(chatRobot)
                    Toast.clear()
                }
            }).catch((error => {
                console.log(error);
            }))
        }
    },
    created() {
        let openaiKey = localStorage.getItem('openaiKey');
        if (!openaiKey) {
            this.api_key = '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'
        } else {
            this.api_key = openaiKey
        }
    },
}