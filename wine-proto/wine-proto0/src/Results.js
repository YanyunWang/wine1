import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Navbar, Nav, Image} from 'react-bootstrap';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import cheapShirazImg from "./assets/img/cheap-shiraz.png";
import mediumShirazImg from "./assets/img/medium-shiraz.png";
import expensiveShirazImg from "./assets/img/expensive-shiraz.png";
import cheapCabernetImg from "./assets/img/cheap-cabernet.png";
import mediumCabernetImg from "./assets/img/medium-cabernet.png";
import expensiveCabernetImg from "./assets/img/expensive-cabernet.png";
import cheapMerlotImg from "./assets/img/cheap-merlot.png";
import mediumMerlotImg from "./assets/img/medium-merlot.png";
import expensiveMerlotImg from "./assets/img/expensive-merlot.png";
import cheapPinotImg from "./assets/img/cheap-pinot.png";
import mediumPinotImg from "./assets/img/medium-pinot.png";
import expensivePinotImg from "./assets/img/expensive-pinot.png";
import cheapChardonnayImg from "./assets/img/cheap-chardonnay.png";
import mediumChardonnayImg from "./assets/img/medium-chardonnay.png";
import expensiveChardonnayImg from "./assets/img/expensive-chardonnay.png";
import cheapSauvignonImg from "./assets/img/cheap-sauv.png";
import mediumSauvignonImg from "./assets/img/medium-sauv.png";
import expensiveSauvignonImg from "./assets/img/expensive-sauv.png";
import cheapSangriaImg from "./assets/img/cheap-sangria.png";
import mediumSangriaImg from "./assets/img/medium-sangria.png";
import expensiveSangriaImg from "./assets/img/expensive-sangria.png";
import cheapMoscatoImg from "./assets/img/cheap-moscato.png";
import mediumMoscatoImg from "./assets/img/medium-moscato.png";
import expensiveMoscatoImg from "./assets/img/expensive-moscato.png";
import cheapRoseImg from "./assets/img/cheap-rose.png";
import mediumRoseImg from "./assets/img/medium-rose.png";
import expensiveRoseImg from "./assets/img/expensive-rose.png";


var firstChoice = '';
var secondChoice = '';
var thirdChoice = '';

var point_map = new Map([['Merlot', 0], ['Shiraz', 0], ['Cabernet Sauvignon', 0], ["Moscato", 0], ["Pinot Grigio", 0], 
                        ["Chardonnay", 0], ["Sauvignon Blanc", 0], ["Sangria", 0], ["White Zinfandel", 0]]);

class Results extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expense: "",
            chosenAnswers: ""
        }
    }

    findWine1() {   
        this.state.chosenAnswers = this.props.location.state;
        this.state.expense = this.state.chosenAnswers.chosenAnswers[0].answer;

        var answers = this.state.chosenAnswers;
        switch (answers.chosenAnswers[1].answer) {
            case "NotSweet":
                this.incrementPoints(["Shiraz", "Cabernet Sauvignon", "Merlot", "Pinot Grigio", "White Zinfandel", "Chardonnay"], 2);
                break;
            case "Sweet":
                this.incrementPoints(["Sauvignon Blanc", "Sangria", "Moscato"], 2);
                break;
        }
        switch (answers.chosenAnswers[2].answer) {
            case "Beer":
                // low alc content
                this.incrementPoints(["Moscato", "Sangria"], 2);
                this.incrementPoints(["White Zinfandel", "Pinot Grigio"], 1);
                break;
            case "Marg":
                // med
                this.incrementPoints(["Merlot", "Sauvignon Blanc", "Chardonnay"], 1);
                break;
            default:
                // high alc content
                this.incrementPoints(["Shiraz", "Cabernet Sauvignon"], 1);
        }
        switch(answers.chosenAnswers[3].answer) {
            // low to high acidity
            case "Black":
                this.incrementPoints(["Shiraz"], 3);
                break;
            case "Light+":
                this.incrementPoints(["Cabernet Sauvignon"], 3);
            case "Medium+":
                this.incrementPoints(["Merlot"], 3);
            default: // white/rose for less tannins
                this.incrementPoints(["Pinot Grigio", "White Zinfandel", "Chardonnay", "Moscato", "Sangria", "Sauvignon Blanc"], 3);
        }
        switch(answers.chosenAnswers[4].answer) {
            // low to high acidity
            case "Sour":
                this.incrementPoints(["Sauvignon Blanc", "Pinot Grigio", "Merlot", "Cabernet Sauvignon", "Shiraz"], 2);
                break;
            case "NotSour":
                this.incrementPoints(["White Zinfandel", "Chardonnay", "Moscato", "Sangria"], 2);
        }
        switch(answers.chosenAnswers[5].answer) {
            // Food pairings
            case "Cheese":
                this.incrementPoints(["Pinot Grigio", "Chardonnay", "Sauvignon Blanc", "White Zinfandel"], 3);
                break;
            case "Asian":
                this.incrementPoints(["Moscato", "Sangria"], 3);
            default:
                this.incrementPoints(["Shiraz", "Cabernet Sauvignon", "Merlot"], 3);
        }
        // Sets first, second, and third as needed
        this.setTopChoices();
     }

    getShiraz(){
        let img = cheapShirazImg
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-shiraz/"
        let price = "2.95"
        let text = 'A red wine from California, this shiraz has subtle flavors of black cherry, blackberry and a hint of spice. Pairs well with pasta, roast beef and steak.'
        if (this.state.expense === "Medium"){
            img = mediumShirazImg
            link = "https://www.vivino.com/penfolds-bin-28-kalimna-shiraz/w/1244?year=2015&price_id=14869784&change_ship_to_country_code=us&change_ship_to_state_code=CA"
            price = "39.99"
            text = 'A deep dark cherry-red, there are plummy fruits meshed with sweet spices like cinnamon. Plenty of layered flavors that pair well with beef, lamb, and poultry.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveShirazImg
            link = "https://drinkdispatch.com/mollydooker-velvet-glove-shiraz-2018/?utm_source=google&utm_medium=cpc&adpos=&scid=scplp4443&sc_intid=4443&gclid=CjwKCAjwjbCDBhAwEiwAiudByyOReS3Ik6uIgLsKXL5JgwbL0m1E8r7C4ym-rBHrBehc9pzY0eSkuxoCoqYQAvD_BwE"
            price = "180.00"
            text = 'Black plum, blueberries and roasted coffee intermingle in this Shiraz. Fruit-forward, with the oak elements of vanilla, mocha and cedar pushed into the background.'
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Shiraz</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getCabernetSauvignon(){
        let img = cheapCabernetImg
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-cabernet-sauvignon/"
        let price = "2.95"
        let text = 'This Cabernet Sauvignon has subtle hints of blackberry, plum, toasted oak, and vanilla. Pairs well with beef, lamb, and poultry.'
        if (this.state.expense === "Medium"){
            img = mediumCabernetImg
            link = "https://www.crownwineandspirits.com/silverado-estate-grown-cabernet-sauvignon-750ml/"
            price = "47.99"
            text = 'A red wine from Napa Valley, this wine offers a semi-dry burst of plums, herbs, rich dark chocolate, and espresso. A great buy while still maintaining an affordable price.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveCabernetImg
            link = "https://silveroak.com/shop/p/2016-napa-valley-cabernet-sauvignon/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy8u9_R876mP0ajpZTQwb_0xXuaz9aYR6prC9g5lcIDPSNUPJgX7CiRoCKpQQAvD_BwE"
            price = "125.00"
            text = 'Dark ruby color, notes of cassis, raspberry, toasted coconut, mixed with shiitake mushroom. This Cabernet has a rich entry while not overly heavy.'
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Cabernet Sauvignon</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getMerlot(){
        let img = cheapMerlotImg
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-merlot/"
        let price = "2.95"
        let text = 'This Merlot offers a subtle mix of black cherry, mixed berries, and a hint of vanilla. Pairs well with steak, pork, and pasta.'
        if (this.state.expense === "Medium"){
            img = mediumMerlotImg
            link = "https://www.wine.com/product/merryvale-merlot-2015/354338?state=CA&s=GoogleBase_CSE_354338_PSNEW21_type_Wine_RedWine_Merlot_10913&region_id=000003"
            price = "47.99"
            text = 'This Merlot has a fantastic blackberry and rosemary nose, and a good tannic finish. This wine pairs well with beef, lamb, and veal.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveMerlotImg
            link = "https://www.estatewinebrokers.com/pahlmeyer-merlot-napa-valley-2006-750ml/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy-CKQUyd4nvozxNUc9yPcQQ99naAotwRhKKmxRP7k2VlZxFhlanpiBoCwhkQAvD_BwE"
            price = "95.00"
            text = 'This Merlot exudes chocolatey sweetness, mocha, cola, black cherry, and plum scents.'
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Merlot</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getPinotGrigio(){
        let img = cheapPinotImg
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-pinot-grigio/"
        let price = "2.95"
        let text = 'This Pinot Grigio offers subtle flavors of citrus, stone fruits, pear, and a hint of honeysuckle. Pairs well with grilled salmon and creamy pastas.'
        if (this.state.expense === "Medium"){
            img = mediumPinotImg
            link = "https://www.instacart.com/landing?product_id=17313984&utm_term=pbi-0&utm_campaign=pinot-grigio-2016_hmart&utm_source=instacart_google&utm_medium=shopping_free_listing&utm_content=productid-17313984_retailerid=119&zipcode_guess=61820"
            price = "32.99"
            text = 'This Pinot Grigio is known for its straw yellow color, clean intense aroma, and dry golden apple taste. Pairs well with fresh cheeses, seafood, pasta, rice dishes, and white meats.'
        } else if (this.state.expense === "Expensive"){
            img = expensivePinotImg
            link = "https://www.kogodwine.com/products/1993-zind-humbrecht-clos-jebsal-pinot-gris"
            price = "147.00"
            text = 'This French Pinot Grigio pairs well with dried fruit and candid nuts. It has a perfect blend of both sweetness and acidity. '
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Pinot Grigio</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getChardonnay(){
        let img = cheapChardonnayImg
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-chardonnay/"
        let price = "2.95"
        let text = 'This Chardonnay offers subtle flavors of ripe apple, pear, toasted oak, and a hint of spice. Pairs well with grilled fish and roasted chicken.'
        if (this.state.expense === "Medium"){
            img = mediumChardonnayImg
            link = "https://www.vivino.com/cakebread-chardonnay-napa-valley/w/740?year=2018&price_id=20409975"
            price = "42.99"
            text = 'This bold Chardonnay exhibits oaky flavors with hints of apple and citrus mixed in. Pairs well with pork, rich fish, poultry, and vegetarian dishes.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveChardonnayImg
            link = "https://www.estatewinebrokers.com/aubert-chardonnay-ritchie-vineyard-2009-750ml/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy2FehtLAt5DEcotvPyz7EBNVWKrg3VbzD8wEhxXSpYO4PRANS4E7vxoCRboQAvD_BwE"
            price = "150.00"
            text = 'This Chardonnay is sharp and filled with detail. This white wine is buttery and complex and could be paired with mushrooms.'
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Chardonnay</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getSauvignonBlanc(){
        let img = cheapSauvignonImg
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-sauvignon-blanc/"
        let price = "2.95"
        let text = 'This Sauvignon Blanc offers layers of citrus,lemon, and apple with elegantly balanced acidity. Paris well with seafood, light pasta dishes, and poultry.'
        if (this.state.expense === "Medium"){
            img = mediumSauvignonImg
            link = "https://www.wine.com/product/spottswoode-sauvignon-blanc-2019/623598"
            price = "47.99"
            text = 'This wine offers an inviting and expressing taste of white peach, tangerine peel, and quiava, with orange blossoms. This smooth and rich wine pairs well with seafood.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveSauvignonImg
            link = "https://www.wine.com/product/gaja-alteni-di-brassica-sauvignon-blanc-2017/578743?state=CA&s=GoogleBase_CSE_578743_PSNEW21_type_Wine_WhiteWine_SauvignonBlanc_1990&region_id=000003&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=Google_Shopping_Smart_Wine&showpromo=true&promo=PSNEW21&gclid=CjwKCAjwjbCDBhAwEiwAiudBywQ0ViTHRKXhERDjohdM7EvKFWvlIMcJQ7MsIgkma7nziOGa2leXbBoCnYgQAvD_BwE&gclsrc=aw.ds#"
            price = "155.00"
            text = 'This wine has unique notes of papaya and pineapple while also having vegetal hints of sage. This wine pairs well with seafood like snapper, sushi, and goat cheese. '
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                        <Card.Title>Sauvignon Blanc</Card.Title>
                           <Card.Text>{text}</Card.Text>
                           <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                    </Card.Body>
                </Card>
            )
        
    }
    getSangria(){
        let img = cheapSangriaImg
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-sangria/"
        let price = "2.95"
        let text = 'This sangria offers delightful red fruit notes with a hint of citrus. Pairs well with seafood, grilled veggies, and Spanish culture.'
        if (this.state.expense === "Medium"){
            img = mediumSangriaImg
            link = "https://www.liquorstore-online.com/116239/madria-sangria-tradicional"
            price = "49.49"
            text = 'This Sangria offers orange, lemon, and wine flavors to add a citrus zing to add vibrant flavors to any dish. Pairs well with Spanish cuisine.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveSangriaImg
            link = "https://www.napacabs.com/glunz-de-la-costa-sangria-red-wine-california-1l-12-pack.html?gclid=CjwKCAjwjbCDBhAwEiwAiudByyc1AOYK980_K_bm-UHnaITrlLoiQzmi-o1jW7npCIzgpMTfpunOohoCHKwQAvD_BwE"
            price = "149.98"
            text = 'This sangria is a california red wine blended with natural flavors. It is crisp with semi-sweet red wine and filled with spirits of orange, lime, and lemon. '
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Sangria</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getMoscato(){
        let img = cheapMoscatoImg
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-moscato/"
        let price = "2.95"
        let text = 'This Moscato offers flavors of ripe citrus, apricot, and peach. This Californian wine pairs well with spicy cuisines, light cheeses, and desserts.'
        if (this.state.expense === "Medium"){
            img = mediumMoscatoImg
            link = "https://www.vivino.com/tenute-dettori-moscadeddu-badde-nigolosu/w/1237874?year=2015&price_id=23077606"
            price = "39.40"
            text = 'This Moscato offers sweet aromas of peaches, fresh grapes, orange blossoms, and crisp lemons. This acidic and lightly wine carbonated is a great dessert wine.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveMoscatoImg
            link = "https://www.liquorstore-online.com/65112/moscato-dasti"
            price = "49.99"
            text = "This Moscato holds strong notes of peaches, rose petals, and ginger. It is sweet and sparkling to taste with a mild acidity."
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Moscato</Card.Title>
                       <Card.Text>{text}</Card.Text>
                       <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getRose(){
        let img = cheapRoseImg
        let link = "https://www.aldi.us/en/products/alcohol/rose-wines/detail/ps/p/winking-owl-white-zinfandel/"
        let price = "2.95"
        let text = 'This Rose offers cranberry and watermelon flavors with notes of fresh strawberry and cherry. Pairs well with salads as well as spicy Asian and Latin cuisine.'
        if (this.state.expense === "Medium"){
            img = mediumRoseImg
            link = "https://www.liquorstore-online.com/98540/five-oaks-white-zinfandel-nv"
            price = "55.99"
            text = 'This Californian White Zinfandel offers a fruity, fragrant, and mildly sweet flavor. Paris well with roasted chicken and grilled fish.'
        } else if (this.state.expense === "Expensive"){
            img = expensiveRoseImg
            link = "https://www.vivino.com/kunde-estate-winery-and-vineyards-reserve-zinfandel-century-vines/w/1780684?year=2018"
            price = "139.99"
            text = 'This Sonoma Valley red wine has oaky notes of chocolate and tobacco. It also encapsulates blackberry notes as well as red fruits like raspberries and cherry. '
        }

        if (this.state.expense === "Cheap") {
            return (
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Rose</Card.Title>
                           <Card.Text>{text}</Card.Text>
                           <Card.Link variant="bottom" target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                    </Card.Body>
                </Card>
            )
        }
        else {
            return (
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>White Zinfandel</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Link target='_blank' href = {link}>Buy Now $({price})</Card.Link>
                    </Card.Body>
                </Card>
            )
        }
    }
    getWine(str){
        if(str === "Shiraz"){
            return this.getShiraz();
        }else if(str === "Merlot"){
            return this.getMerlot();
        }else if(str === "Cabernet Sauvignon"){
            return this.getCabernetSauvignon();
        }else if(str === "Pinot Grigio"){
            return this.getPinotGrigio();
        }else if(str === "Chardonnay"){
            return this.getChardonnay();
        }else if(str === "Sauvignon Blanc"){
            return this.getSauvignonBlanc();
        }else if(str === "Sangria"){
            return this.getSangria();
        }else if(str === "Moscato"){
            return this.getMoscato();
        }else if(str=== "Rose" || str === "White Zinfandel"){
            return this.getRose();
        }else {
            return this.getChardonnay();
        }
    }

    getResults(){
        this.findWine1()
        return (
            <>
            <p className = "results-text">Based on your responses, you might like the following wines:</p>
            <CardDeck className = "results-card">
                {this.getWine(firstChoice)}
                {this.getWine(secondChoice)}
                {this.getWine(thirdChoice)}
            </CardDeck>
            </>
        )
    }
    render() {
        return (
            <>
            <ExamplesNavbar />
            <div className = "results-container">
                {this.getResults()}</div>
            </>
        )
    }

    // Helper functions for the wine recommendation algorithm
    incrementPoints(typesToIncrement, incrementValue) {
        for (let i = 0; i < typesToIncrement.length; i++) {
            point_map.set(typesToIncrement[i], point_map.get(typesToIncrement[i]) + incrementValue);
        }
    }
    setTopChoices() {
        var point_array = Array.from(point_map);
        point_array.sort(function(a,b) { return b[1] - a[1] })
        firstChoice = point_array[0][0];
        secondChoice = point_array[1][0];
        thirdChoice = point_array[2][0];
    }
}
export default Results;