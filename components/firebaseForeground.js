'use client'
import useFcmToken from './fcmtoken';
import { getMessaging, onMessage } from 'firebase/messaging';
import { firebaseApp } from './firebase';
import { useEffect } from 'react';

export default function FcmTokenComp() {
  const { notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      if (notificationPermissionStatus === 'granted') {
        const messaging = getMessaging(firebaseApp);
        const unsubscribe = onMessage(messaging, 
            (payload) => console.log('Foreground push notification received:', payload)
        );
        //testing return title on alert
        // const unsubscribe = onMessage(messaging, 
        //     (payload) => alert('Notif: '+JSON.stringify(payload.data.title))
        // );
        return () => {
            unsubscribe(); // Unsubscribe from the onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus]);

  return null; // This component is primarily for handling foreground notifications
}