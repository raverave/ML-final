import { iconsBot, iconsUser } from '../icons';

export default function ContainerBot({ index, typ, msg, prb, tim }) {
  return(
    <div key={index} className={typ ? 'containerbot' : 'containerbot darker'}>
      <img src={typ ? iconsBot : iconsUser} alt="Avatar" style={{width:"100%"}} className={typ ? '' : 'right'} />
      <div className={`${typ ? 'row' : 'row pt-4'}`}>
        <div className={typ ? 'col-sm-8 pt-4' : 'col-sm-2'}>{typ ? msg : <span className='time-left'>{tim}</span>}</div>
        <div className={typ ? 'col-sm-4 pt-2' : 'col-sm-10 text-end'}>{typ ? <span className='time-right'>{prb}<br />{tim}</span> : msg}</div>
      </div>
    </div>
  );
};
