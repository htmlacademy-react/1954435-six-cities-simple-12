import {renderHook} from '@testing-library/react';
import {useRef} from 'react';
import {Map} from 'leaflet';
import useMap from './useMap';
import {makeFakeCity} from '../../utils/mocks';

const mokeLocation = makeFakeCity();

describe('Hook: useMap', () => {
  it('should return instance of leaflet if it has ref and location', () => {
    const blockElement = document.createElement('div');

    const {result} = renderHook(() => {
      const mokeMapRef = useRef<HTMLElement | null>(blockElement);

      return useMap(mokeMapRef, mokeLocation);
    });

    expect(result.current).not.toBeNull();
    expect(result.current).toBeInstanceOf(Object);
    expect(result.current).toBeInstanceOf(Map);
  });

  it('should return null if it has not ref', () => {
    const {result} = renderHook(() => {
      const mokeMapRef = useRef<HTMLElement | null>(null);

      return useMap(mokeMapRef, mokeLocation);
    });

    expect(result.current).toBeNull();
    expect(result.current).not.toBeInstanceOf(Map);
  });
});
