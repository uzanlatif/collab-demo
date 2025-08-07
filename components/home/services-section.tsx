"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import Image from "next/image"

interface DragState {
  isDragging: boolean
  startX: number
  startY: number
  currentX: number
  currentY: number
}

interface ImagePosition {
  x: number
  y: number
  rotation: number
  scale: number
  originalScale: number
  zIndex: number
}

const services = [
  {
    title: "Collab Digital",
    description: "Performance marketing, paid ads (Meta, Google, Tiktok), Programmatic RMB, OTT & SEO",
    icon: "/images/services/digital.png",
    iconColor: "text-blue-400",
    images: [
      "/images/services/dig/img1.png",
      "/images/services/dig/img2.png",
      "/images/services/dig/img3.png",
    ],
  },
  {
    title: "Collab Community",
    description:
      "Building and engaging online communities through social listening, influencer partnerships, and targeted interaction.",
    icon: "/images/services/community.png",
    iconColor: "text-purple-400",
    images: [
      "/images/services/com/img1.png",
      "/images/services/com/img2.png",
      "/images/services/com/img3.png",
    ],
  },
  {
    title: "Collab Production",
    description:
      "High-quality video, animation, and multimedia content creation tailored to your brand's identity and goals.",
    icon: "/images/services/prod.png",
    iconColor: "text-red-400",
    images: [
      "/images/services/prod/img1.png",
      "/images/services/prod/img2.png",
      "/images/services/prod/img3.png",
    ],
  },
  {
    title: "Collab Media",
    description:
      "Strategic media placement, digital publishing, and outreach through various owned and partner platforms.",
    icon: "/images/services/media.png",
    iconColor: "text-green-400",
    images: [
      "/images/services/med/img1.png",
      "/images/services/med/img2.png",
      "/images/services/med/img3.png",
    ],
  },
  {
    title: "Collab Event",
    description:
      "End-to-end offline and online event planning, from ideation to execution, tailored to audience engagement.",
    icon: "/images/services/event.png",
    iconColor: "text-orange-400",
    images: [
      "/images/services/event/img1.png",
      "/images/services/event/img2.png",
      "/images/services/event/img3.png",
    ],
  },
]

export default function WhatWeDoSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
  })

  const selectedService = services[selectedIndex]
  const containerRef = useRef<HTMLDivElement>(null)

  const getInitialPositions = useCallback((): ImagePosition[] => {
    return [
      { x: 60, y: 10, rotation: 15, scale: 1.1, originalScale: 1.1, zIndex: 5 },
      { x: 10, y: 25, rotation: -8, scale: 0.9, originalScale: 0.9, zIndex: 3 },
      { x: 70, y: 45, rotation: 12, scale: 1.0, originalScale: 1.0, zIndex: 4 },
    ]
  }, [])

  const [imagePositions, setImagePositions] = useState<ImagePosition[]>(getInitialPositions())

  const handleImageClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault()
    const isActive = activeImageIndex === index

    if (isActive) {
      setActiveImageIndex(null)
      setImagePositions((prev) =>
        prev.map((pos, i) => ({
          ...pos,
          scale: pos.originalScale,
          zIndex: pos.zIndex === 100 ? 5 : pos.zIndex,
        })),
      )
    } else {
      setActiveImageIndex(index)
      setImagePositions((prev) =>
        prev.map((pos, i) => ({
          ...pos,
          scale: i === index ? pos.originalScale * 1.15 : pos.originalScale,
          zIndex: i === index ? 100 : pos.zIndex < 100 ? pos.zIndex : 5,
        })),
      )
    }
  }

  const handleDragStart = useCallback(
    (index: number, event: React.MouseEvent | React.TouchEvent) => {
      if (activeImageIndex !== index) return
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX
      const clientY = "touches" in event ? event.touches[0].clientY : event.clientY
      setDragState({
        isDragging: true,
        startX: clientX,
        startY: clientY,
        currentX: clientX,
        currentY: clientY,
      })
      event.preventDefault()
    },
    [activeImageIndex],
  )

  const handleDragMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!dragState.isDragging || activeImageIndex === null) return

      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX
      const clientY = "touches" in event ? event.touches[0].clientY : event.clientY

      const deltaX = clientX - dragState.startX
      const deltaY = clientY - dragState.startY

      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const newX = Math.max(
          0,
          Math.min(100, imagePositions[activeImageIndex].x + (deltaX / containerRect.width) * 100),
        )
        const newY = Math.max(
          0,
          Math.min(100, imagePositions[activeImageIndex].y + (deltaY / containerRect.height) * 100),
        )

        setImagePositions((prev) =>
          prev.map((pos, i) => (i === activeImageIndex ? { ...pos, x: newX, y: newY } : pos)),
        )
      }

      setDragState((prev) => ({
        ...prev,
        currentX: clientX,
        currentY: clientY,
      }))
    },
    [dragState.isDragging, dragState.startX, dragState.startY, activeImageIndex, imagePositions],
  )

  const handleDragEnd = useCallback(() => {
    setDragState({ isDragging: false, startX: 0, startY: 0, currentX: 0, currentY: 0 })
  }, [])

  useState(() => {
    const move = (e: MouseEvent | TouchEvent) => handleDragMove(e)
    const end = () => handleDragEnd()

    if (dragState.isDragging) {
      document.addEventListener("mousemove", move as any)
      document.addEventListener("mouseup", end)
      document.addEventListener("touchmove", move as any)
      document.addEventListener("touchend", end)
      return () => {
        document.removeEventListener("mousemove", move as any)
        document.removeEventListener("mouseup", end)
        document.removeEventListener("touchmove", move as any)
        document.removeEventListener("touchend", end)
      }
    }
  })

  const handleServiceChange = (index: number) => {
    setSelectedIndex(index)
    setActiveImageIndex(null)
    setImagePositions(getInitialPositions())
  }

  const handleContainerClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setActiveImageIndex(null)
      setImagePositions((prev) =>
        prev.map((pos) => ({
          ...pos,
          scale: pos.originalScale,
          zIndex: pos.zIndex === 100 ? 5 : pos.zIndex,
        })),
      )
    }
  }

  return (
    <section className="bg-black py-16 px-6 md:px-16 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-center uppercase mb-16">WHAT WE DO</h2>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            {services.map((service, index) => {
              const isActive = selectedIndex === index
              return (
                <button
                  key={index}
                  onClick={() => handleServiceChange(index)}
                  className={`flex items-start gap-4 px-4 py-4 text-left transition-all duration-500 group rounded-2xl ${
                    isActive
                      ? "bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-transparent"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="w-10 h-10 shrink-0">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isActive ? "text-white" : "text-gray-300"}`}>
                      {service.title}
                    </h3>
                    {isActive && (
                      <p className="text-sm text-gray-400 leading-relaxed animate-fadeIn max-w-md">
                        {service.description}
                      </p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
            <div ref={containerRef} className="relative w-full h-full cursor-pointer" onClick={handleContainerClick}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent rounded-2xl" />

              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {selectedService.images.map((image, index) => {
                  const position = imagePositions[index] || imagePositions[0]
                  const isActive = activeImageIndex === index
                  const isDragging = dragState.isDragging && isActive

                  return (
                    <div
                      key={`${selectedIndex}-${index}`}
                      className={`absolute transition-all duration-300 ease-out ${
                        isActive ? "cursor-move" : "cursor-pointer"
                      } ${isDragging ? "transition-none" : ""}`}
                      style={{
                        top: `${position.y}%`,
                        left: `${position.x}%`,
                        transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
                        zIndex: position.zIndex,
                        animation:
                          !isActive && !isDragging ? `float${index} 6s ease-in-out ${index * 0.5}s infinite` : "none",
                      }}
                      onClick={(e) => handleImageClick(index, e)}
                      onMouseDown={(e) => handleDragStart(index, e)}
                      onTouchStart={(e) => handleDragStart(index, e)}
                    >
                      <div
                        className={`relative rounded-lg overflow-hidden shadow-2xl border transition-all duration-300 ${
                          isActive
                            ? "border-blue-400 shadow-blue-400/50 shadow-2xl"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedService.title} showcase ${index + 1}`}
                          width={200}
                          height={150}
                          className="object-cover pointer-events-none"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        {isActive && (
                          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Decorative circles */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse pointer-events-none" />
                <div
                  className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-lg animate-pulse pointer-events-none"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-500/10 rounded-full blur-md animate-pulse pointer-events-none"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">{selectedService.title}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Click images to select • Drag to move • Click again to deselect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes float0 {
          0%, 100% { transform: rotate(15deg) scale(1.1) translateY(0px); }
          50% { transform: rotate(15deg) scale(1.1) translateY(-10px); }
        }

        @keyframes float1 {
          0%, 100% { transform: rotate(-8deg) scale(0.9) translateY(0px); }
          50% { transform: rotate(-8deg) scale(0.9) translateY(-15px); }
        }

        @keyframes float2 {
          0%, 100% { transform: rotate(12deg) scale(1.0) translateY(0px); }
          50% { transform: rotate(12deg) scale(1.0) translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
