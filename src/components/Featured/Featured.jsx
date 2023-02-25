import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

const Featured = ({ type }) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{ type === 'movie' ? 'Movies' : 'Series' }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">WWestern</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
            src="https://showmax.akamaized.net/i/d19722ee-8121-40bf-8bc1-d854f03d8b85/format=webp/q=70/1600x" 
            alt="" 
            width={'100%'}
        /> 
        <div className="info">
            <img 
                src="/images/Game-of-Thrones-01.png" 
                width={'100%'}
                alt="" 
            />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Non excepturi saepe voluptas impedit esse et molestias 
                vitae accusamus eum iusto exercitationem, animi odio 
                possimus quam tenetur voluptate, reiciendis sequi quasi.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>info</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Featured;