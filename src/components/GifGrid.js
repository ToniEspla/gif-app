import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '../css/GifGrid.css';

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>   
            {loading && <p>Cargando...</p>}
            <div className='grid-contenedor'>
                {
                    data.map(item => {
                        return (
                          <GifGridItem key={item.id} item={item} />
                        );
                    })
                }
            </div>
        </div>
        );
};

export default GifGrid;