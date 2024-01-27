import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

export default function useOrientation() {
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>();

  useEffect(() => {
    const updateOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(currentOrientation);
    };

    const subscription = ScreenOrientation.addOrientationChangeListener((event) =>
      setOrientation(event.orientationInfo.orientation)
    );

    updateOrientation();
    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return {
    orientation,
    isLandscape:
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
  };
}
