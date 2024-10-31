import '../../../css/toast/toast.css';

export class Toast {
    constructor(type, text) {
        this.type = type;
        this.text = text;
        this.toastEl = null;
    }

    setColor() {
        switch (this.type) {
            case 'success':
                return 'green';
            case 'warning':
                return 'red';
        }
    }

    createToast() {
        const newToast = document.createElement('div');
        newToast.className = 'toast';
        newToast.innerHTML = `<p>${this.text}</p>`;
        newToast.style.backgroundColor = this.setColor();
        document.body.appendChild(newToast);
        this.toastEl = newToast
    }

    removeToast() {
        if (this.toastEl) {
            document.body.removeChild(this.toastEl);
            this.toastEl = null;
        }
    }

    toastIt() {
        this.createToast();

        setTimeout(() => {
            this.toastEl.style.animation = 'toastOut 880ms ease-out';
            // after animation finishes, remove toast
            this.toastEl.addEventListener('animationend', () => this.removeToast(), {once: true});
        }, 3500);
    }
}