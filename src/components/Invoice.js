import React from "react";
import easyinvoice from "easyinvoice";
import { ReactDOM } from "react";


class EasyInvoiceSample extends React.Component {
    constructor(props) {
        super(props);
        /* this.invoiceBase64 = "Hello world!"     */
        this.state = {
            invoiceBase64: ''
        };
    }

    async createInvoice() {
        // See documentation for all data properties
        const data = this.getSampleData();
        const result = await easyinvoice.createInvoice(data);
        this.setState({
            invoiceBase64: result.pdf
        });
    }

    async downloadInvoice() {
        // See documentation for all data properties
        const data = this.getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download('myInvoice.pdf', result.pdf);
        //	you can download like this as well:
        //	easyinvoice.download();
        //	easyinvoice.download('myInvoice.pdf');
    }

    async renderInvoice() {
        // See documentation for all data properties
        document.getElementById('pdf').innerHTML = 'loading...';
        const data = this.getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.render('pdf', result.pdf);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.createInvoice()}>Create Invoice</button>
                <button onClick={() => this.downloadInvoice()}>Download Invoice</button>
                <button onClick={() => this.renderInvoice()}>Render Invoice</button>
                <br />
                <br />
                <p>
                    Invoice Base64 (click create invoice): <small>{this.state.invoiceBase64}</small>
                </p>
                <div id="pdf"></div>
            </div>
        );
    }

    getSampleData() {
        return {
            // "customize": {
            //     "template": "SGVsbG8gd29ybGQh" // Must be base64 encoded html. This example contains 'Hello World!' in base64
            // },
            images: {
                logo: 'https://public.easyinvoice.cloud/img/logo_en_original.png',
                background: 'https://public.easyinvoice.cloud/img/watermark-draft.jpg'
            },
            sender: {
                company: 'Sample Corp',
                address: 'Sample Street 123',
                zip: '1234 AB',
                city: 'Sampletown',
                country: 'Samplecountry'
                // "custom1": "custom value 1",
                // "custom2": "custom value 2",
                // "custom3": "custom value 3"
            },
            client: {
                company: 'Client Corp',
                address: 'Clientstreet 456',
                zip: '4567 CD',
                city: 'Clientcity',
                country: 'Clientcountry'
                // "custom1": "custom value 1",
                // "custom2": "custom value 2",
                // "custom3": "custom value 3"
            },
            information: {
                number: '2021.0001',
                date: '12-12-2021',
                'due-date': '31-12-2021'
            },
            products: [
                {
                    quantity: 2,
                    description: 'Product 1',
                    'tax-rate': 6,
                    price: 33.87
                },
                {
                    quantity: 4.1,
                    description: 'Product 2',
                    'tax-rate': 6,
                    price: 12.34
                },
                {
                    quantity: 4.5678,
                    description: 'Product 3',
                    'tax-rate': 21,
                    price: 6324.453456
                }
            ],
            'bottom-notice': 'Kindly pay your invoice within 15 days.',
            settings: {
                currency: 'USD' // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
                // "locale": "nl-NL", // Defaults to en-US, used for number formatting (see docs)
                // "taxNotation": "gst", // Defaults to vat
                // "margin-top": 25, // Default to 25
                // "margin-right": 25, // Default to 25
                // "margin-left": 25, // Default to 25
                // "margin-bottom": 25, // Default to 25
                // "format": "Letter", // Defaults to A4
                // "height": "1000px", // allowed units: mm, cm, in, px
				        // "width": "500px", // allowed units: mm, cm, in, px
        				// "orientation": "landscape", // portrait or landscape, defaults to portrait

            }
            // Used for translating the headers to your preferred language
            // Defaults to English. Below example is translated to Dutch
            // "translate": {
            //     "invoice": "FACTUUR",
            //     "number": "Nummer",
            //     "date": "Datum",
            //     "due-date": "Verloopdatum",
            //     "subtotal": "Subtotaal",
            //     "products": "Producten",
            //     "quantity": "Aantal",
            //     "price": "Prijs",
            //     "product-total": "Totaal",
            //     "total": "Totaal"
            // },
        };
    }
}

export function prn() { <EasyInvoiceSample />}
export default prn;

// ReactDOM.render(<EasyInvoiceSample />, document.querySelector('#app'));