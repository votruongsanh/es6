const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('')
            root.innerHTML = html
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete');
            if (deleteBtn) {
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        init() {
            //handle DOM events
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }

            root.onclick = this.handleDelete.bind(this)

            this.render()
        }
    }
})();
app.init()

/**
 * phương thức bind() cho phép ràng buộc this cho một phương thức (function)
 * trả về một hàm mới với context được bind
 * có thể nhận các đối số như hàm ban đầu
 */
