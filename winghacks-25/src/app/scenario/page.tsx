"use client";
import { useRouter } from 'next/navigation';

export default function Scenario() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div className="map-background-container">
      <
    </div>
  );
}