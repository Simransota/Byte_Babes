import { Button } from "@/components/ui/button"

type SmartChip = {
  id: string
  label: string
  icon: string
  color: string
  action: string
  message: string
}

interface SmartSuggestionChipsProps {
  onChipClick: (action: string, message: string) => void
}

const SMART_CHIPS: SmartChip[] = [
  {
    id: "job_search",
    label: "Find Jobs",
    icon: "🔍",
    color: "#FFE4EC",
    action: "job_search",
    message: "I'd like to search for jobs based on my preferences."
  },
  {
    id: "email",
    label: "Write cold message",
    icon: "📩",
    color: "#D2B6E2",
    action: "cold_email",
    message: "I'd like help writing a cold message."
  },
  {
    id: "skill",
    label: "Skill gap analysis",
    icon: "🧑‍💻",
    color: "#DCF1F9",
    action: "skill_gap_analysis",
    message: "I need feedback on my resume to improve it."
  },
  {
    id: "roadmap",
    label: "Career roadmap",
    icon: "📈",
    color: "#D2B6E2",
    action: "career_roadmap",
    message: "I want to create a career development roadmap."
  },
  // {
  //   id: "stories",
  //   label: "Success stories",
  //   icon: "❤️‍🔥",
  //   color: "#FFE4EC",
  //   action: "success_stories",
  //   message: "I'd like to read some career success stories for inspiration."
  // },
  {
    id:"cover_letter",
    label: "Cover letter",
    icon: "📝" ,
    color: "#FFE4EC",
    action: "cover_letter",
    message: "I'd like to generate a cover letter for a job application."
  },
  {
    id: "referral",
    label: "Referral Email",
    icon: "🤝",
    color: "#D2B6E2",
    action: "referral",
    message: "I want to generate a referral email for a job."
  },
  {
    id: "resume",
    label: "Resume feedback",
    icon: "📝",
    color: "#FFE4EC",
    action: "resume_feedback",
    message: "I'd like feedback on my resume to improve it."
    
  }
]

export function SmartSuggestionChips({ onChipClick }: SmartSuggestionChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {SMART_CHIPS.map((chip) => (
        <Button
          key={chip.id}
          variant="outline"
          className="whitespace-nowrap flex items-center gap-1"
          size="sm"
          onClick={() => onChipClick(chip.action, chip.message)}
          style={{ backgroundColor: chip.color }}
        >
          <span>{chip.icon}</span>
          {chip.label}
        </Button>
      ))}
    </div>
  )
} 