const React = require("react");

const Form = (props) => {

    let [data, setData] = React.useState({
        name: "",
        price: 0,
        quantity: 0,
        favorite: false
    })

    function handleFormSubmit(event){
        event.preventDefault();
        props.onProductAdd(data);
        setData({
            name: "",
            price: 0,
            quantity: 0,
            favorite: false
        });
    }

    function handleNameChange(event){
        setData({...data, name: event.target.value});
    }

    function handlePriceChange(event){
        setData({ ...data, price: event.target.value });
    }

    function handleQuantityChange(event){
        setData({ ...data, quantity: event.target.value });
    }

    function handleCheckboxChange(event){
        if (event.target.checked) {
            setData({ ...data, favorite: true });
        } else {
            setData({ ...data, favorite: false });
        }
    }

    function handleUnitsChange(event) {
        setData({ ...data, units: event.target.value });
    }

    return<>
                <form className="blog_form" action="" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Название</label>
                        <input type="text" className="form-control" id="name" onChange={handleNameChange} value={data.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Цена</label>
                        <input type="text" className="form-control" id="price" onChange={handlePriceChange} value={data.price} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Количество</label>
                        <input type="text" className="form-control" id="quantity" onChange={handleQuantityChange} value={data.quantity} />
                    </div>
                    <div className="mb-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-label">
                                <label htmlFor="units">Единицы измерения:</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-control">
                                <select name="units" id="units" onChange={handleUnitsChange}>
                                    <option value="">Выберите единицу измерения</option>
                                    <option value="l">Литр</option>
                                    <option value="kg">Килограмм</option>
                                    <option value="piece">Штука</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-label">
                            <label>Избранное:</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-control">
                            <div className="form-control-radio">
                                <input type="checkbox" name="like" id="like" checked={data.favorite} onChange={handleCheckboxChange}/>
                                <label htmlFor="like">Like</label>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary third" >Добавить</button>
                    </div>
                </form>
    </>
};

module.exports = Form;