import { LitElement, html } from '@polymer/lit-element';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';

export class DishDetailComponent extends LitElement {
    constructor() {
        super();
        this.listOfDishes = []
    }

    static get properties() {
        return {
            listOfDishes: { type: Array }
        };
    }

    verifyThereAreDishes() {
        if (this.listOfDishes.length === 0) {
            return false
        } else {
            return true
        }
    }

    render() {
            return html `
            <style is="custom-style">
                :host {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                paper-card {
                    max-width: 500px;
                }
                .cafe-header { @apply --paper-font-headline; }
                .cafe-light { color: var(--paper-grey-600); }
                .cafe-location {
                    float: right;
                    font-size: 15px;
                    vertical-align: middle;
                }
                .cafe-reserve { color: var(--google-blue-500); }
                iron-icon.star {
                    --iron-icon-width: 16px;
                    --iron-icon-height: 16px;
                    color: var(--paper-amber-500);
                }
                .horizontal {
                    display: flex;
                    justify-content: center;
                }
                iron-icon.star:last-of-type { color: var(--paper-grey-500); }
            </style>

            
            <section>
            ${this.verifyThereAreDishes() ?
            html`${this.listOfDishes.map(dish => html`
                    <paper-card image="${dish.image}">
                        <div class="card-content">
                            <div class="cafe-header">${dish.name}
                                <div class="cafe-location cafe-light">
                                    <iron-icon icon="communication:location-on"></iron-icon>
                                    <span>${dish.energyValue} cal</span>
                                </div>
                            </div>
                            <rating-component rate="0"></rating-component>
                            <p>${dish.price}.00 MXN</p>
                            <p class="cafe-light">${dish.description}</p>
                        </div>
                        <div class="card-actions">
                            <div class="horizontal">
                                <paper-button class="info" on-click="__updateDish">Modificar</paper-button>
                                <paper-button class="error" on-click="__deleteDish">Eliminar</paper-button>
                            </div>
                        </div>
                    </paper-card>
                `)}` : 
                html`<paper-card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaor-vp2mctnOF7bnbY7xWvkoIGKtrekFBHu_4aDhI2xSG1rRH&s">

                </paper-card>`}
                
            </section>
            <!-- <create-dish view="create" on-dish-created="__createDish"></create-dish> -->
            <!-- <update-dish view="update" dish="[[selectedDish]]" on-dish-updated="__dishUpdated"></update-dish> -->
        `;
    }
}
customElements.define('dish-detail-component', DishDetailComponent);