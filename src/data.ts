import { AlertTriangle, Settings2, ScanEye, TrendingUp, Wrench, Workflow, CalendarRange, Boxes, Database, Factory, Users, GraduationCap, BrainCircuit, Cog, type LucideIcon } from 'lucide-react'

export const WEBINAR_START = new Date('2026-12-12T10:00:00+05:30').getTime()
export const NAV = [
  ['overview', 'Overview'], ['learn', "What You'll Learn"], ['agenda', 'Agenda'],
  ['speaker', 'Speaker'], ['pricing', 'Pricing'], ['faq', 'FAQ'],
] as const

type Item = { icon: LucideIcon; title: string; text: string; fix?: string }
export const challenges: Item[] = [
  { icon: AlertTriangle, title: 'Unexpected Machine Downtime', text: 'One failed motor can halt an entire line for hours.', fix: 'Sensor models flag wear days ahead so repairs happen on your schedule.' },
  { icon: Settings2, title: 'Production Inefficiencies', text: 'Bottlenecks, idle time and changeovers quietly eat output.', fix: 'Live data shows where flow breaks and helps reschedule work.' },
  { icon: ScanEye, title: 'Quality Control Challenges', text: 'Manual inspection is slow, tiring and inconsistent.', fix: 'Cameras check every part at line speed, catching defects at source.' },
  { icon: TrendingUp, title: 'Rising Operational Costs', text: 'Energy, scrap and rework keep pushing margins down.', fix: 'Optimization cuts waste, energy use and unplanned maintenance spend.' },
]
export const learn: Item[] = [
  { icon: Wrench, title: 'Predictive Maintenance', text: 'Understand how AI identifies patterns to help predict equipment failures.' },
  { icon: ScanEye, title: 'Computer Vision', text: 'Explore automated quality inspection and defect detection.' },
  { icon: Workflow, title: 'Smart Factory Automation', text: 'Discover how intelligent automation improves production workflows.' },
  { icon: CalendarRange, title: 'AI-Powered Production Planning', text: 'Understand how data-driven decisions optimize manufacturing operations.' },
  { icon: Boxes, title: 'Digital Twins', text: 'Explore virtual factory models and real-time simulations.' },
  { icon: Database, title: 'Industrial Data Analytics', text: 'Learn how AI converts manufacturing data into actionable insights.' },
]
export const agenda = [
  ['10:00 AM', 'Welcome and Introduction'], ['10:10 AM', 'Understanding AI in Manufacturing'],
  ['10:30 AM', 'Predictive Maintenance and Smart Automation'], ['10:55 AM', 'Computer Vision and Quality Inspection'],
  ['11:20 AM', 'Real-World Industrial Applications'], ['11:45 AM', 'Live Q&A and Discussion'], ['12:00 PM', 'Closing Remarks'],
]
export const audience: Item[] = [
  { icon: Factory, title: 'Factory Owners and Manufacturers', text: 'See where AI pays back first on your shop floor.' },
  { icon: Cog, title: 'Industrial and Mechanical Engineers', text: 'Learn how sensors, models and vision systems fit existing equipment.' },
  { icon: Users, title: 'Production and Operations Managers', text: 'Cut downtime and plan output with live data.' },
  { icon: BrainCircuit, title: 'AI and Data Science Professionals', text: 'Understand how models are applied to industrial data.' },
  { icon: GraduationCap, title: 'Engineering Students and Fresh Graduates', text: 'Get a clear view of in-demand Industry 4.0 skills.' },
]
export const benefits = ['Live 2-hour webinar access', 'Presentation materials', 'Practical industry case studies', 'Participation certificate', 'Interactive Q&A session']
export const roles = ['Factory owner / Manufacturer', 'Industrial / Mechanical engineer', 'Operations / Production manager', 'AI / Data science professional', 'Student / Fresh graduate', 'Other']
export const faqs = [
  ['Is this webinar suitable for beginners?', 'Yes. We start with the fundamentals of AI in manufacturing and build up to real applications, so no coding or data science background is needed.'],
  ['Will the webinar be conducted online?', 'Yes. It is a live online session on December 12, 2026, from 10:00 AM to 12:00 PM IST. You can join from a laptop, tablet or phone.'],
  ['Will participants receive a certificate?', 'Yes. Both passes include a participation certificate.'],
  ['Will the session be recorded?', 'Recording details are not confirmed for this demonstration. State the recording policy here before launching a real event.'],
  ['How can I register?', 'Choose a pass, fill in the registration form and select Reserve My Seat. In this demo, no payment is processed.'],
  ['What technologies will be discussed?', 'Predictive maintenance models, computer vision for quality inspection, industrial IoT sensors and analytics, digital twins, and AI-assisted production planning and automation.'],
]
